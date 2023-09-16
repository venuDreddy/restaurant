import Categories from "./Categories";
import MenuItems from "./MenuItems";
const Menu = ({ data, setData, initialData }) => {
  const cat = initialData.map(({ attributes: { category } }) => category);
  const categories = ["all", ...new Set(cat)];
  return (
    <>
      <div className='title-container'>
        <h2 className='title'>Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories
        categories={categories}
        setData={setData}
        initialData={initialData}
      />
      <MenuItems data={data} />
    </>
  );
};
export default Menu;
