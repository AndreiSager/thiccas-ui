import Avatar, { AvatarProps } from "../Avatar/Avatar";

const AvatarGroup: React.FC<AvatarProps> = ({
  className,
  variant = "circle",
  size = "medium",
  ...props
}) => {
  return (
    <div className="flex -space-x-2">
      {[1, 2, 3].map((avatar) => (
        <Avatar variant={variant} size={size} {...props} className="-ml-2" />
      ))}
    </div>
  );
};

export default AvatarGroup;
