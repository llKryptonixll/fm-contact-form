import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SucessModal from './components/SucessModal';

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    watch
  } = useForm({
    defaultValues: {
      generalEnquiry: false,
      supportRequest: false,
    },
    mode: 'submit',
  });

  const generalEnquiryChecked = watch('generalEnquiry');
  const supportRequestChecked = watch('supportRequest');

  function setCheckboxErrors() {
    if (!generalEnquiryChecked && !supportRequestChecked) {
      setError('checkboxGroup', { type: 'required', message: 'Please select a query type' });
      return;
    }
  }

  const onSubmit = (data) => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000)
  };

  const handleCheckboxChange = (checkboxId) => {
    if (checkboxId === 'generalEnquiry') {
      setValue('generalEnquiry', true);
      setValue('supportRequest', false);
    } else if (checkboxId === 'supportRequest') {
      setValue('generalEnquiry', false);
      setValue('supportRequest', true);
    }
    clearErrors('checkboxGroup');
  };

  const labelStyles = "text-grey_900";
  const starStyles = "text-green_600";
  const generalInputStyles = "rounded-lg focus:outline-none focus:border-green_600 border-[1px] border-grey_500 p-2 hover:border-green_600 transition-colors cursor-pointer";
  const errorStyles = "text-red";
  const submitButtonStyles = "col-span-2 rounded-lg bg-green_600 p-3 text-white hover:bg-very_dark_green transition-colors"
  const queryType_CheckboxStyles = "w-5 h-5 grid place-items-center rounded-full border-2 cursor-pointer ml-4 mr-3"
  const allowContact_CheckboxStyles = "w-5 h-4 accent-green_600 cursor-pointer"
  const queryType_CheckboxCheckedStyles = "bg-green_200 border-green_600"

  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="font-karla bg-green-200 min-h-screen grid place-items-center p-main_padding">
      <SucessModal
        isVisible={isVisible}
      />
      <section className="bg-white max-w-[710px] w-full min-h-[750px] p-form_padding grid rounded-xl">
        <header>
          <h1 className="font-bold text-4xl text-grey_900 sm:mb-0 mb-8">Contact Us</h1>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-8">
          <div className="grid sm:col-span-1 col-span-2">
            <label className={labelStyles} htmlFor="firstName">First Name <span className={starStyles}>*</span></label>
            <input
              id="firstName"
              name='firstName'
              type="text"
              className={`${errors.firstName && "border-red"} ${generalInputStyles} `}
              {...register("firstName", { required: true })}
            />
            {errors.firstName?.type === 'required' && <p className={errorStyles}>This field is required</p>}
          </div>

          <div className="grid sm:col-span-1 col-span-2">
            <label className={labelStyles} htmlFor="lastName">Last Name <span className={starStyles}>*</span></label>
            <input
              id="lastName"
              name='lastName'
              type="text"
              className={`${errors.lastName && "border-red"} ${generalInputStyles} `}
              {...register("lastName", { required: true })}
            />
            {errors.lastName?.type === 'required' && <p className={errorStyles}>This field is required</p>}
          </div>

          <div className="grid col-span-2">
            <label className={labelStyles} htmlFor="email">Email Address <span className={starStyles}>*</span></label>
            <input
              id="email"
              name='email'
              type="email"
              className={`${errors.email && "border-red"} ${generalInputStyles} `}
              {...register('email', {
                required: "Please enter a valid email address",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Please enter a valid email address'
                },
              })}
            />
            {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-2 col-span-2 gap-x-4 sm:gap-y-0 gap-y-4">
            <p className='col-span-2'>Query Type <span className={starStyles}>*</span></p>
            <div
              onClick={() => handleCheckboxChange('generalEnquiry')}
              className={`${generalEnquiryChecked ? queryType_CheckboxCheckedStyles : ""} ${generalInputStyles} flex items-center sm:col-span-1 col-span-2`
              }>
              <div
                className={`${queryType_CheckboxStyles} ${generalEnquiryChecked ? 'border-green_600 content-none after:block after:rounded-full after:w-3 after:h-3 after:bg-green_600' : ''}`}
              />
              <label className={`${labelStyles} cursor-pointer`} htmlFor="generalEnquiry">General Enquiry</label>
              <input
                id="generalEnquiry"
                name='generalEnquiry'
                type="checkbox"
                {...register('generalEnquiry')}
                checked={generalEnquiryChecked}
                onChange={() => handleCheckboxChange('generalEnquiry')}
                className="hidden"
              />
            </div>
            <div
              onClick={() => handleCheckboxChange('supportRequest')}
              className={`${supportRequestChecked ? queryType_CheckboxCheckedStyles : ""} ${generalInputStyles} flex items-center sm:col-span-1 col-span-2`}
            >
              <div className={`${queryType_CheckboxStyles} ${supportRequestChecked ? 'border-green_600 content-none after:block after:rounded-full after:w-3 after:h-3 after:bg-green_600' : ''}`} />
              <label className={`${labelStyles} cursor-pointer`} htmlFor="supportRequest">Support Request</label>
              <input
                id="supportRequest"
                name='supportRequest'
                type="checkbox"
                {...register('supportRequest')}
                checked={supportRequestChecked}
                onChange={() => handleCheckboxChange('supportRequest')}
                className="hidden"
              />
            </div>
            {errors.checkboxGroup && <p className={errorStyles}>{errors.checkboxGroup.message}</p>}
          </div>

          <div className='grid col-span-2'>
            <label className={labelStyles} htmlFor="textarea">Message <span className={starStyles}>*</span></label>
            <textarea
              id="textarea"
              name='textarea'
              className={`${errors.textarea ? "border-red" : ""} ${generalInputStyles} `}
              {...register("textarea", { required: "Textarea is required" })}
            />
            {errors.textarea && <p className={errorStyles}>{errors.textarea.message}</p>}
          </div>

          <div className='col-span-2'>
            <div className='flex space-x-4 items-center'>
              <input
                id='allowContact'
                name='allowContact'
                type="checkbox"
                className={allowContact_CheckboxStyles}
                {...register("allowContact", { required: "To submit this form, please consent to being contacted" })}
              />
              <label className='cursor-pointer' htmlFor="allowContact">I consent to being contacted by the team *</label>
            </div>
            {errors.allowContact && <p className={errorStyles}>{errors.allowContact.message}</p>}
          </div>

          <button onClick={setCheckboxErrors} className={submitButtonStyles} type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default App;