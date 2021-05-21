import * as React from 'react';
import { render } from '@testing-library/react';

import App from '../containers';

import TodoProvider from '../context';

describe('App test', () => {
  let conteiner;

  beforeEach(() => {
    conteiner = render(
      <TodoProvider>
        <App />
      </TodoProvider>,
    );
  });

  it('should render App component', () => {
    const { getByTestId } = conteiner;
    const appConteiner = getByTestId('appConteiner');
    expect(appConteiner).toBeDefined();
  });
});
