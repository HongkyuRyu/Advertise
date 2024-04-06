"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-hero relative xl:bg-cover xl:h-[1098px] py-40
    pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        {/*타이포그래피 + 이미지*/}
        <div className="flex items-center xl:h-[960px]">
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-7"
            >
              건강하게
              <br />
              맛있게
            </motion.h1>
            <motion.p
              className="font-semibold text-white mb-7"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <span className="text-orange">채선당 자연한가득 당산점</span>
            </motion.p>
            <motion.p
              className="max-w-lg mx-auto mb-12 text-white xl:max-w-none xl:mx-0"
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              샤브샤브는 물론 월남쌈 그리고 구이메뉴와 함께 샤브야채를
              무제한으로 제공하고 있습니다. 인덕션으로 쾌적한 환경에서
              샤브샤브를 즐겨보세요!
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>당산점 소개페이지</Button>
            </motion.div>
          </div>
          {/* 이미지 */}
          <motion.div
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image src="/hero/plate.png" width={756} height={682} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
