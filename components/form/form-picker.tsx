"üse client";

import { unsplash } from "@/lib/unsplash";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}
export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);
    const [loading, setLoading]= useState(true)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9
        });
        if (result && result.response) {
          const newImages =( result.response as Array<Record<string, any>>);
          setImages(newImages);
        }else{
            console.error("Failed to get images from splash")
        }
      } catch (err) {
        console.log(err);
        setImages([]);
      }finally{
        setLoading(false)
      }
    };
    fetchImages()
  }, []);
  if(loading){
    return(
        <div className="p-6 flex justify-center items-center">
            <Loader2 className="w-6 h-6 text-sky-700 animate-spin" />
        </div>
    )
  }
  return (
    <div>
      <div></div>
      Form Picker
    </div>
  );
};
