import Image from "next/image";
import IconETH from "@/assets/icon-eth.svg";
import React from "react";
import IconVerify from "@/assets/verify.svg";
export function CardCollector({numberItem,image, name, valueBtc, percent}) {
    return (
        <>
            <div className="bg-white bg-opacity-[0.01] py-4 px-6 flex items-center justify-between rounded-full border border-white border-opacity-5 w-full max-w-card-collector">
                <div className="flex items-center gap-4 @desktop:gap-6">
                    <strong className="font-semibold">{numberItem}</strong>
                    <div className="flex items-center gap-4">
                        <div className="w-10 relative h-10">
                            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center border-2 border-white border-opacity-5">
                                <Image
                                    className="w-full h-full object-cover"
                                    src={image}
                                    alt="Image"
                                />
                            </div>
                            <Image
                                className="absolute -right-1 -bottom-1 "
                                src={IconVerify}
                                alt="Icon Verify"
                            />
                        </div>
                        <div className="space-y-1">
                            <h4>{name}</h4>
                            <p className="flex flex-col items-start @desktop:flex-row @desktop:items-center gap-1 text-sm text-white text-opacity-70">
                                Preço mínimo
                                <span className="flex items-center gap-1 font-semibold text-sm">
                                    <Image src={IconETH} alt="Etherium" />
                                    {valueBtc} BTC
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-1 text-right">
                    <strong className="text-green-primary font-bold">
                        +{percent}%
                    </strong>
                    <span className="flex items-center gap-1 font-semibold text-sm">
                        <Image src={IconETH} alt="Etherium" />
                        {valueBtc} BTC
                    </span>
                </div>
            </div>
        </>
    );
}
