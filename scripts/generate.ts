import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
//Configure dotenv before other imports
import fs from "fs";
import path from "path";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { DocumentInterface } from "@langchain/core/documents";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Redis } from "@upstash/redis";
import puppeteer from "puppeteer";

async function generateEmbeddings() {
  await Redis.fromEnv().flushdb();

  const vectorStore = await getVectorStore();

  (await getEmbeddingsCollection()).deleteMany({});

  const baseUrl = process.env.BASE_URL;

  // const appLoader = new DirectoryLoader(
  //   "src/app",
  //   {
  //     ".tsx": (path) => new TextLoader(path),
  //   },
  //   true,
  // );

  // const componentsLoader = new DirectoryLoader(
  //   "src/components",
  //   {
  //     ".tsx": (path) => new TextLoader(path),
  //   },
  //   true,
  // );

  // const appDocs = await appLoader.load();
  // const componentsDocs = await componentsLoader.load();

  const staticDocs = fs
    .readdirSync("./.next/server/app")
    .filter((file) => file.endsWith(".html"))
    .map((file) => {
      const filePath = path.join("./.next/server/app", file);
      const pageContent = fs.readFileSync(filePath, "utf-8");

      // Use the file name as the URL
      const url = "/" + path.basename(file, ".html");
      return {
        pageContent,
        metadata: { url },
      };
    });

  const slugs = ["handy-website-for-a-horse-club-part-1"];

  // Launch a headless browser
  const browser = await puppeteer.launch();

  const slugDocs = await Promise.all(
    slugs.map(async (slug) => {
      // Load the page
      const page = await browser.newPage();
      await page.goto(`${baseUrl}/projects/${slug}`);

      // Get the page content
      const pageContent = await page.content();

      return {
        pageContent,
        metadata: { url: `projects/${slug}` },
      };
    }),
  );

  // Close the browser
  await browser.close();

  // const docs = [...appDocs, ...componentsDocs]
  //   .filter((doc) => doc.metadata.source.endsWith(".tsx"))
  //   .map((doc): DocumentInterface => {
  //     let url;
  //     if (doc.metadata.source.includes("/src/app")) {
  //       url =
  //         doc.metadata.source
  //           .replace(/\\/g, "/")
  //           .split("/src")[1]
  //           .split("/page.")[0] || "/";
  //     } else {
  //       url = null; // or some other placeholder value
  //     }

  //     const pageContentTrimmed = doc.pageContent
  //       .replace(/^import.*$/gm, "") // Remove imports
  //       .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove class names
  //       .replace(/^\s*[\r]/gm, "") // Remove empty lines
  //       .trim();
  //     // .replace(/\/\/.*$/gm, "") // Remove comments
  //     // .replace(/\n\s*\n/g, "\n") // Remove empty lines

  //     return {
  //       pageContent: pageContentTrimmed,
  //       metadata: { url },
  //     };
  //   });

  const docs = [...staticDocs, ...slugDocs];

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

  const splitDocs = await splitter.splitDocuments(docs);

  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
