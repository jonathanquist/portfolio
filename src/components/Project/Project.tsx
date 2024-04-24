type ProjectProps = {
  id: string;
};

const Project = ({ id }: ProjectProps) => {
  return (
    <div>
      <>{id}</>
    </div>
  );
};

export default Project;
