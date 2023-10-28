interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

// const Child = ({ color }: ChildProps) => {
//   return (
//     <div>
//       <button onClick={onClick}>Clicker</button>
//     </div>
//   );
// };

const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Clicker</button>
    </div>
  );
};

export default ChildAsFC;
