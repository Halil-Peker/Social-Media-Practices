import { object, string, number} from 'yup';

let validations = object({
  
  topic: string().min(5, "En az 5 karakter olmalı").required("Zorunlu Alan"),
  contents: string().min(25, "En az 25 karakter olmalı").required("Zorunlu Alan"),
  userId: number("number girin").min(1).required("Zorunlu Alan"),
  comId: number().min(0).required("Zorunlu Alan"),
  likeCount: number().min(0).required("Zorunlu Alan"),
  dislikeCount: number().min(0).required("Zorunlu Alan"),
  
 
});
export default validations;