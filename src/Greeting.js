import React, { useState, useEffect } from 'react'

const Greeting = () => {
    const [name, setName] = useState('Mary')
    const [surname, setSurname] = useState('Poppins')
    const [width, setWidth] = useState(window.innerWidth)

    //componentDidMount() and componentDidUpdate()
    useEffect(() => {
        console.log('useEffect - name/surname');
        document.title = name + ' ' + surname
    }, [name, surname])

    //componentDidMount()
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

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleSurnameChange = e => {
        setSurname(e.target.value)
    }

    return (
        <section>
            <div>Name</div>
            <input type="text"
                value={name}
                onChange={handleNameChange} />
            <div>Surname</div>
            <input type="text"
                value={surname}
                onChange={handleSurnameChange} />
            <div>Width</div>
            <div>{width}</div>
        </section>
    )
}

export default Greeting