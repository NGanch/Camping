type Props = {
     gallery: string[];
     count: number;
    // onCardClick?: () => void;
};
  
const Gallery = ({ gallery, count }: Props) => {
    const handleClick = () => {
      //   onCardClick();
    };
  
    return (
      <ul className="flex gap-[16px]">
        {gallery.slice(0, count).map((img) => (
          <li key={img} className="w-[290px] h-[270px] rounded-[10px]" onClick={handleClick}>
            <img className="h-[270px] rounded-[10px]" src={img} alt={img} />
          </li>
        ))}
      </ul>
    );
  };
  
  export default Gallery;
  

