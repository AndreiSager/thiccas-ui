import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]">
      <Button
        intent={"secondary"}
        size={"medium"}
        children={"Button"}
        className=""
      />
    </div>
  );
}
