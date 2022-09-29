import { object, ref, string} from 'yup';

let validations = object({
  email: string().email("E-mail tanımına uyuşmuyor").required("Zorunlu Alan"),
  password: string().min(5, "En az 5 karakter olmalı").required("Zorunlu Alan"),
  confirmPassword: string().oneOf([ref('password')], "Paralolar Uyuşmuyor").required("Zorunlu Alna")
 
});
export default validations;