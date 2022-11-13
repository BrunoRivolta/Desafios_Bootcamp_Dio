import { Container, Content, Row} from './styles'
import { Input } from './components/Input'
import { Button, Button2 } from './components/Button'
import { useState } from 'react'

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0')
    const [firstNumber, setFirstNumber] = useState('0')
    const [operation, setOperation] = useState('')

    const handleOnClear = () => {
        setCurrentNumber('0')
        setFirstNumber('0')
    }

    const handleAddNumber = (num) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }

    const handleSumNumbers = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('+')
        } else {
            const sum = Number(firstNumber) + Number(currentNumber)
            setCurrentNumber(String(sum))
            setOperation('')
        }
    }

    const handleSubNumbers = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('-')
        } else {
            const sub = Number(firstNumber) - Number(currentNumber)
            setCurrentNumber(String(sub))
            setOperation('')
        }
    }

    const handleMulNumbers = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('x')
        } else {
            const mul = Number(firstNumber) * Number(currentNumber)
            setCurrentNumber(String(mul))
            setOperation('')
        }
    }

    const handleDivNumbers = () => {
        if(firstNumber === '0') {
            setFirstNumber(String(currentNumber))
            setCurrentNumber('0')
            setOperation('/')
        } else {
            const mul = Number(firstNumber) / Number(currentNumber)
            setCurrentNumber(String(mul))
            setOperation('')
        }
    }

    const handleEquals = () => {
        if(firstNumber !== '0' && operation !== '' && currentNumber !== '=') {
            switch(operation) {
            case '+' :
                handleSumNumbers()
                break
            case '-' :
                handleSubNumbers()
                break
            case 'x' :
                handleMulNumbers()
                break
            case '/' :
                handleDivNumbers()
                break
            default:
                break
            }
        } 
    }

    return (
        <Container>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <Button2 label='x' onClick={handleMulNumbers}/>
                    <Button2 label='÷' onClick={handleDivNumbers}/>
                    <Button2 label='c' onClick={handleOnClear}/>
                    <Button2 label='.' onClick={() => handleAddNumber('.')}/>
                </Row>
                <Row>
                    <Button label='7' onClick={() => handleAddNumber('7')}/>
                    <Button label='8' onClick={() => handleAddNumber('8')}/>
                    <Button label='9' onClick={() => handleAddNumber('9')}/>
                    <Button2 label='-' onClick={handleSubNumbers}/>
                </Row>
                <Row>
                    <Button label='4' onClick={() => handleAddNumber('4')}/>
                    <Button label='5' onClick={() => handleAddNumber('5')}/>
                    <Button label='6' onClick={() => handleAddNumber('6')}/>
                    <Button2 label='+' onClick={handleSumNumbers}/>
                </Row>
                <Row>
                    <Button label='1' onClick={() => handleAddNumber('1')}/>
                    <Button label='2' onClick={() => handleAddNumber('2')}/>
                    <Button label='3' onClick={() => handleAddNumber('3')}/>
                    <Button2 label='=' onClick={handleEquals}/>
                </Row>
            </Content>
        </Container>
    )
}

export default App