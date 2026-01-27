interface Props {
  content: string;
  styles: string;
}

const ButtonM: React.FC<Props> = ({ content, styles }) => {
  return (
    <button className={`p-2 pr-2.5 ${styles} hover:cursor-pointer`}>
      {content}
    </button>
  );
};

export default ButtonM;