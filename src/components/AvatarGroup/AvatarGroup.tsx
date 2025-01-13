import Avatar, { AvatarProps } from "../Avatar/Avatar";

const AvatarGroup: React.FC<AvatarProps> = ({
  className,
  variant = "circle",
  size = "medium",
  ...props
}) => {
  return (
    <div className="-gap*-5 flex">
      {[1, 2, 3].map((avatar) => (
        <Avatar variant={variant} size={size} {...props} />
      ))}
    </div>
  );
};

export default AvatarGroup;
