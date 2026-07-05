import { toast } from "sonner";

export const customSuccessToast = (boldTxt: string = "", restTxt: string) => {
  if (boldTxt) {
    toast.success(
      <p>
        <b className="capitalize">{boldTxt}</b>&nbsp;{restTxt}
      </p>,
    );
    return;
  }
  toast.success(<p>{restTxt}</p>);
};
