const Categories = ({ categories, setData, initialData }) => {
  const handleCategoryButton = (category) => {
    console.log(category);
    if (category === "all") setData(initialData);
    else {
      const newData = initialData.filter(
        (item) => category === item.attributes.category
      );
      setData(newData);
    }
  };
  return (
    <div className='categories-btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='category-btn'
            key={index}
            onClick={() => {
              handleCategoryButton(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
