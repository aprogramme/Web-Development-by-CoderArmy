import { useForm } from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(15, "Name must be at most 15 characters long"),
    age: z.coerce.number().min(10, "Age must be at least 10").max(80, "Age must be at most 80"),
    email: z.email("Email is invalid"),
    password: z.string().min(5, "Password must be at least 5 characters long").max(20, "Password must be at most 20 characters long"),
    confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });

function ZodForm() {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(formSchema)
    });

    function submitForm(data) {
        console.log(data);
    }

    console.log("render");

    return (
        <>
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="first">Name: </label>
                <input id="first" {...register('name')} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
                <label htmlFor="second">Age: </label>
                <input id="second" {...register('age')} />
                {errors.age && <span>{errors.age.message}</span>}
            </div>

            <div>
                <label htmlFor="third">Email: </label>
                <input id="third" {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <label htmlFor="fourth">Password: </label>
                <input id="fourth" {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div>
                <label htmlFor="fifth">Confirm Password: </label>
                <input id="fifth" {...register('confirm')} />
                {errors.confirm && <span>{errors.confirm.message}</span>}
            </div>

            <button>Submit</button>
        </form>
        </>
    )
}

export default ZodForm;