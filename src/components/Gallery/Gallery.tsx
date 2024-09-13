type Props = {
  gallery: Array<{ thumb: string; original: string }>;
  count: number;
};

const Gallery = ({ gallery, count }: Props) => {
  const handleClick = () => {};

  return (
    <ul className="w-full flex flex-col md:flex-row xl:flex-row  gap-[16px]">
      {gallery.slice(0, count).map(({ thumb }) => (
        <li
          key={thumb}
          className="w-full md:w-[calc((100%-16px)/2)] lg:w-[292px] h-[320px] rounded-[10px]"
          onClick={handleClick}
        >
          <img
            className="w-[292px] h-[320px] lg:w-[292px] object-cover rounded-[10px]"
            src={thumb}
            alt={"car"}
          />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
