import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import DarkMode from '../../styles/global_dark';

import { Header, RepositoryInfo, Issues, DarkSwitcher } from './styles';

import {
  PortugueseText,
  JapaneseText,
  EnglishText,
  GermanText,
} from '../../lang/baseText';

import logoImg from '../../assets/logo.svg';
import logoImgDark from '../../assets/logo_dark.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface LangObject {
  dark: string;
  dashTitle: string;
  repoSearchPlaceHolder: string;
  search: string;
  stars: string;
  forks: string;
  issues: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedDarkModeInfo = localStorage.getItem('@githubExplorer:darkMode');

    if (storedDarkModeInfo) {
      return JSON.parse(storedDarkModeInfo);
    }

    return 0;
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

  const { params } = useRouteMatch<RepositoryParams>();

  function toggleDarkMode(): void {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });
    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  useEffect(() => {
    localStorage.setItem('@githubExplorer:darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <Header className={darkMode ? 'dark' : ''}>
        <Link to="/">
          <img
            src={darkMode ? logoImgDark : logoImg}
            alt="Github Explorer Logo"
          />
        </Link>
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

      {repository && (
        <RepositoryInfo className={darkMode ? 'dark' : ''}>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>{textLanguage.stars}</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>{textLanguage.forks}</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>{textLanguage.issues}</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues className={darkMode ? 'dark' : ''}>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
      <DarkMode isDark={darkMode} />
    </>
  );
};

export default Repository;
