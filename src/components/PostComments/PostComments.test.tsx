import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

describe('Testando o componente PostComments', () => {
    it('Deve permitir inserir dois comentários', () => {
        render(<PostComments />);

        // Encontrar a área de texto e o botão
        const textarea = screen.getByTestId('textarea');
        const button = screen.getByTestId('submit-button');

        // Inserir o primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        // Verificar o primeiro comentário
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Inserir o segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        // Verificar o segundo comentário
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});