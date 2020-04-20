import React, { useState, useEffect } from 'react'

const Greeting = () => {
    const name = useFormInput('Mary')
    const surname = useFormInput('Poppins')
    const width = useWindowWidth() //A custom hook function name must start with 'use'
    useDocumentTitle(name + ' ' + surname)

    return (
        <section>
            <div>Name</div>
            <input {...name} />
            <div>Surname</div>
            <input {...surname} />
            <div>Width</div>
            <div>{width}</div>
        </section>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)

    const handleChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

const useDocumentTitle = title => {
    //componentDidMount() and componentDidUpdate()
    useEffect(() => {
        console.log('useEffect - name/surname');
        document.title = title
    }, [name, surname])
}

const useWindowWidth = () => {
    //componentDidMount()
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        console.log('useEffect - width');
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        //if your effect returns a function, React will run it when it is time to clean up
        //componentWillUnmount()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width]) //the useEffect is being applied at every render, this method is called even if I change the name or surname
    //avoid it passing a second argument to useEffect to check whether the width value has changed or not

    return width
}

export default Greeting