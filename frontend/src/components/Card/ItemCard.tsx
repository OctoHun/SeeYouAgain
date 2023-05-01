import React, { FunctionComponent, HTMLProps } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { AiFillStar } from 'react-icons/ai';
import img from '../../images/img_step_01.jpg';
import { SlOptions } from 'react-icons/sl';

// 괄호 안에 << data: object >> 이거 넣으시면 됩니다.
function ItemCard() {
    // 임시 데이터 입니다. 삭제하시면 됩니다.
    const data = {
        startDate: '23.04.07(금)',
        endDate: '23.04.27(목)',
        productImg: [img],
        title: '닌텐도 팝니다.',
        location: '장덕동',
        price: '4400',
        score: '4.8',
    };
    return (
        <div className="w-[100%]">
            {/* <span className="bg-black rounded-full text-white px-[0.8rem] py-[0.2rem]">
                {data.startDate} ~ {data.endDate}
            </span> */}
            <div className="flex mt-[0.4rem] relative">
                <div className="w-[30%] relative mr-[0.8rem]">
                    <Image src={data.productImg[0]} alt="임시 사진" className="aspect-square rounded-[0.6rem]" layout="fill" objectFit="cover" />
                    <Button.Heart isActive={false} className="absolute right-0 top-1" />
                </div>
                <div className="flex flex-col w-[70%]">
                    <span className="font-bold w-[100%] flex items-center justify-between">
                        <span className="truncate w-[11.87rem]">{data.title}</span>
                        <SlOptions className="bg-[#F2F2F2] h-[1.5rem] p-[0.2rem] w-[1.5rem]" />
                    </span>
                    <span className="flex items-center text-darkgrey">
                        <AiFillStar className="mr-[0.2rem]" color="darkgrey" />
                        {data.score}
                    </span>
                    <div className="flex justify-between">
                        <span className="text-[#8E8E93]">{data.location}</span>
                        <div>
                            <span className="font-bold">{data.price}</span>
                            <span className="text-[#8E8E93]">원 /일</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col items-center border-r-[1px] w-[50%] text-darkgrey text-[0.87rem]">
                            <span className="font-bold">대여일</span>
                            <span>{data.startDate}</span>
                        </div>
                        <div className="flex flex-col w-[50%] items-center text-darkgrey text-[0.87rem]">
                            <span className="font-bold">반납일</span>
                            <span>{data.endDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
