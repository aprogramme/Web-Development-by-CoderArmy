import { useForm } from "react-hook-form"

function Form() {

    const {register, handleSubmit, formState: { errors }} = useForm();

    function submitForm(data) {
        console.log(data);
    }

    console.log("render");

    return (
        <>
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="first">Name: </label>
                <input id="first" {...register('name', 
                    { required: "Name can't be empty"}
                )} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div>
                <label htmlFor="second">Age: </label>
                <input id="second" {...register('age', 
                    {
                        min:{
                            value: 10,
                            message: "Age must be at least 10"
                        },
                        max:{
                            value:80,
                            message: "Age must be less than 80"
                        }
                    }
                )} />
                {errors.age && <span>{errors.age.message}</span>}
            </div>

            <div>
                <label htmlFor="third">Password: </label>
                <input id="third" {...register('password',
                    {
                        minLength:{
                            value: 5,
                            message: "Minimum length should be 5"
                        },
                        maxLength:{
                            value:14,
                            message: "Maximum length should be 14"
                        }
                    }
                )} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button>Submit</button>
        </form>
        </>
    )
}

export default Form;