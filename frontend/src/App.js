import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import './App.css';
import api from './services/api';
/*
  Componente
  Propriedade
  Estado & imutabilidade
*/
function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
      console.log(response);
    })
  }, []);
  // useStae retorna um array com 2 posições
  // 1 valor inicial
  // 2 função para atualizarmos o valor
  function handleProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
	    owner: "juliano"
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Projects"/>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;