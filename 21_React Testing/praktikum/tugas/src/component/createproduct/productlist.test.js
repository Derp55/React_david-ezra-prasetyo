import {render, fireEvent, test} from 'vitest';
import ProductList from './Productlist';

test('should render input text correctly', async () => {
    const {getByLabelText} = await render(<ProductList />);
    
})