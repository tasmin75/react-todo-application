import React from 'react';
import TodoApp from './components/TodoApp';

const App: React.FC = () => {
  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
      <TodoApp />
    </div>
  );
};

export default App;