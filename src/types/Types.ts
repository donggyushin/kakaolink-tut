export type LinkObject = {
 webURL?: string, //optional
 mobileWebURL?: string, //optional
 androidExecutionParams?: string, //optional For Linking URL
 iosExecutionParams?: string //optional For Linking URL
};

export type ContentObject = {
 title: string, //required
 link: LinkObject, //required
 imageURL: string, //required

 desc?: string, //optional
 imageWidth?: number, //optional
 imageHeight?: number //optional
};

export type SocialObject = {
 likeCount?: number, //optional
 commentCount?: number, //optional
 sharedCount?: number, //optional
 viewCount?: number, //optional
 subscriberCount?: number //optional
};

export type ButtonObject = {
 title: string, //required
 link: LinkObject //required
};

export type CommerceDetailObject = {
 regularPrice?: number, //required,
 discountPrice?: number, //optional
 discountRate?: number, //optional
 fixedDiscountPrice?: number //optional
};