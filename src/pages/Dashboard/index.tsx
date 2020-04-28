import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
  PortugueseText,
  JapaneseText,
  EnglishText,
  GermanText,
} from '../../lang/baseText';

import logoImg from '../../assets/logo.svg';
import logoImgDark from '../../assets/logo_dark.svg';

import DarkMode from '../../styles/global_dark';
import {
  Title,
  Form,
  Repositories,
  Error,
  DarkSwitcher,
  Header,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface LangObject {
  dark: string;
  dashTitle: string;
  repoSearchPlaceHolder: string;
  search: string;
  notFound: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedDarkModeInfo = localStorage.getItem('@githubExplorer:darkMode');

    if (storedDarkModeInfo) {
      return JSON.parse(storedDarkModeInfo);
    }

    return 0;
  });

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storedRepositories = localStorage.getItem(
      '@githubExplorer:repositories',
    );

    if (storedRepositories) {
      return JSON.parse(storedRepositories);
    }
    return [];
  });

  const [textLanguage, setTextLanguage] = useState<LangObject>(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');

    if (lang === 'pt') {
      return PortugueseText;
    }
    if (lang === 'jp') {
      return JapaneseText;
    }
    if (lang === 'ge') {
      return GermanText;
    }
    return EnglishText;
  });

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Type "author/repositoryName" to add a new repository');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');

      setInputError('');
    } catch (err) {
      setInputError(textLanguage.notFound);
    }
  }

  function toggleDarkMode(): void {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  useEffect(() => {
    localStorage.setItem('@githubExplorer:darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Header className={darkMode ? 'dark' : ''}>
        <img
          src={darkMode ? logoImgDark : logoImg}
          alt="Github Explorer Logo"
        />
        <DarkSwitcher>
          {textLanguage.dark}
          <label htmlFor="darkSelector" className="switch">
            <input
              type="checkbox"
              id="darkSelector"
              onChange={toggleDarkMode}
              defaultChecked={darkMode}
            />
            <span className="slider" />
          </label>
        </DarkSwitcher>
      </Header>

      <Title className={darkMode ? 'dark' : ''}>{textLanguage.dashTitle}</Title>
      <Form
        hasError={!!inputError}
        onSubmit={handleAddRepository}
        className={darkMode ? 'dark' : ''}
      >
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          type="text"
          placeholder={textLanguage.repoSearchPlaceHolder}
        />
        <button type="submit">{textLanguage.search}</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories className={darkMode ? 'dark' : ''}>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}?${new URLSearchParams(
              window.location.search,
            )}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={`${repository.owner.login} avatar`}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
      <DarkMode isDark={darkMode} />
    </>
  );
};

export default Dashboard;
