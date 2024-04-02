import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentario', () => {
        render(<PostComment />)

        // 1º comentario
        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        })
        fireEvent.click(screen.getByTestId('comentario-btn'))

        //2º comentario
        fireEvent.change(screen.getByTestId('comentario-textarea'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        })
        fireEvent.click(screen.getByTestId('comentario-btn'))

        expect(screen.getAllByTestId('elemento-comentario')).toHaveLength(2);
});
})