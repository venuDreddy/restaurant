const MenuItems = ({ data }) => {
  return (
    <div className='menu-items-container'>
      {data.map(({ id, attributes }) => {
        const { name, price, description, image } = attributes;
        const img =
          "http://localhost:1337" +
          image.data[0].attributes.formats.thumbnail.url;
        return (
          <div className='single-item' key={id}>
            <div className='image-container'>
              <img src={img} alt={name} />
            </div>
            <div className='item-title'>
              <span className='item-title-name'>{name}</span>
              <span className='price'>$ {price}</span>
            </div>
            <div className='description'>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuItems;
