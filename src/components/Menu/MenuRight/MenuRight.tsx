type MenRightProps = {
  currentPage: any;
};

const MenuRight = ({ currentPage }: MenRightProps) => {
  console.log(currentPage);
  return (
    <div>
      <>Menu Right</>
    </div>
  );
};

export default MenuRight;
