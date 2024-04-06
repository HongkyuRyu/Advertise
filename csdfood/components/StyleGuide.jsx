import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const StyleGuide = () => {
  return (
    <>
      {/* 타이포그래피 */}
      <div className="flex flex-col p-24 gap-y-4">
        <h1>헤더1</h1>
        <h2>헤더2</h2>
        <h3>헤더3</h3>
        <p>
          샤브샤브로 내 몸을 건강하게! 채선당 당산점에 오신 것을 환영합니다.
        </p>
      </div>
      <div className="flex flex-col p-24 bg-black gap-y-4 ">
        <Link href="/">홈</Link>
        {/* 버튼 */}
        <Button variant="default">밥먹자!</Button>
        <Button variant="orange">밥먹자!</Button>
        <Button variant="input">밥먹자!</Button>
        <Button variant="orange" size="sm">
          밥먹자!
        </Button>
        {/* 라벨 및 input */}
        <div>
          <Label htmlFor="firstname">이름</Label>
          <Input type="firstname" id="firstname"></Input>
        </div>
        <div>
          <Label htmlFor="lastname">성</Label>
          <Input type="lastname" id="lastname"></Input>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
