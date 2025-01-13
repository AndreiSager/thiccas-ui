import Avatar, { AvatarProps } from "../Avatar/Avatar";

const AvatarGroup: React.FC<AvatarProps> = ({
  className,
  variant = "circle",
  size = "medium",
  ...props
}) => {
  return (
    <div>
      {[1, 2, 3].map((avatar) => (
        <Avatar />
      ))}
    </div>
  );
};

export default AvatarGroup;
