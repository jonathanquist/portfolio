import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

//Configure dotenv before other imports
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { DocumentInterface } from "@langchain/core/documents";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Redis } from "@upstash/redis";

async function generateEmbeddings() {
  await Redis.fromEnv().flushdb();

  const vectorStore = await getVectorStore();

  (await getEmbeddingsCollection()).deleteMany({});

  const loader = new DirectoryLoader(
    "src/app",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true,
  );

  const docs = (await loader.load())
    .filter((doc) => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/app")[1]
          .split("/page.")[0] || "/";

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "") // Remove imports
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove class names
        .replace(/^\s*[\r]/gm, "") // Remove empty lines
        .trim();
      // .replace(/\/\/.*$/gm, "") // Remove comments
      // .replace(/\n\s*\n/g, "\n") // Remove empty lines

      return {
        pageContent: pageContentTrimmed,
        metadata: { url },
      };
    });

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

  const splitDocs = await splitter.splitDocuments(docs);

  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
