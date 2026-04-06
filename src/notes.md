1. e.target.[name of the input field].value

2. use form action and formData in the action handler. formData. get('name of the input field')

3. controlled component. one per each field. use state on change of the field. useful to dynamically handle error.

3-1. handle all controlled field on one state object
const [formData, setFormData] = useState({
    name: '',
    password: '',
    phone: '',
})

4. unControlled using useRef

5. Hook Form

# Context API
1. create a context using createContext with a default value make sure you export the context to be user in other files