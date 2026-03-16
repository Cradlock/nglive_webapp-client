


interface NotifyHasData {
  id: number,
  data?: string,
};

interface NotifyHasTime {
  duration?: number,
  delay?: number
};

interface NotifyHasType {
  type: "success" | "warning" | "error" | "info"
};


export interface ToastNotify extends 
  NotifyHasData,
  NotifyHasTime,
  NotifyHasType
{
  position: "top" | "bottom" | "right" | "left"
};

export interface BannerNotify extends 
  NotifyHasData,
  NotifyHasType
{
  sticky: boolean,
  timer?: number
};






export interface LocalSettings{
  theme: "dark" | "light"
  lang: "en" | "ru"
};

export interface ServerSettings{

};

