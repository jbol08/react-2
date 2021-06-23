import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	Card,
	CardBody,
	CardTitle,
	CardText
} from 'reactstrap';

function NewFormItem({ add }) {
    let history = useHistory();

    const INITIAL_STATE = {
        type: '',
        name: '',
        description: '',
        recipe: '',
        serve: ''
    };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const type = formData.type;
        add(formData);
        setFormData(INITIAL_STATE);
        history.push(type === 'snack' ? '/snacks' : '/drinks');
    };
    return (
        
        <Card>
            <CardBody>
            <CardTitle>Add A New Item</CardTitle>
            
           
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='type'> Add a Snack or Drink:</Label>
                    <Input
                        type='select'
                        name='type'
                        id='type'
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option>Is This a Snack Or Drink?</option>
                        <option value='snack'>Snack</option>
                        <option value='drink'>Drink</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='name'>Name of Item</Label>
                    <Input
                        type='text'
                        name='name'
                        id='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name of  Item"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>Description of Item</Label>
                    <Input
                        type='textarea'
                        name='description'
                        id='description'
                        value={formData.description}
                        onChange={handleChange}
                        required
                        placeholder="Description of  Item"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='recipe'>Recipe for your Item</Label>
                    <Input
                        type='textarea'
                        name='recipe'
                        id='recipe'
                        value={formData.recipe}
                        onChange={handleChange}
                        required
                        placeholder="recipe for Item"
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='serve'>How do you serve this Item?</Label>
                    <Input
                        type='textarea'
                        name='serve'
                        id='serve'
                        value={formData.serve}
                        onChange={handleChange}
                        required
                        placeholder="How do you serve it?"
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            </CardBody>
        </Card>
       
    );
}

export default NewFormItem;