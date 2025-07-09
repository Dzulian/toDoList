import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [zadania, setZadania] = useState([
    // Audytor dostępności cyfrowej
    {
      id: 1,
      rodzajZadania: "Przeczytać WCAG 2.1 Guidelines (poziom AA)",
      opisZadania: "Poznanie oficjalnych wytycznych dostępności internetowej, które są podstawą każdego audytu",
      kategoria: "audytor",
      statusZadania: false
    },
    {
      id: 2,
      rodzajZadania: "Nauczyć się używać screen readerów (NVDA, JAWS)",
      opisZadania: "Praktyczne testowanie stron tak, jak robią to użytkownicy niewidomi",
      kategoria: "audytor",
      statusZadania: false
    },
    {
      id: 3,
      rodzajZadania: "Opanować narzędzia audytorskie (axe DevTools, WAVE)",
      opisZadania: "Automatyczne narzędzia do wykrywania problemów z dostępnością",
      kategoria: "audytor",
      statusZadania: false
    },
    {
      id: 4,
      rodzajZadania: "Przećwiczyć testowanie nawigacji klawiaturą",
      opisZadania: "Sprawdzanie czy wszystkie funkcje są dostępne bez myszy",
      kategoria: "audytor",
      statusZadania: false
    },
    {
      id: 5,
      rodzajZadania: "Poznać standardy ARIA i ich implementację",
      opisZadania: "Rozszerzenia HTML dla lepszej dostępności aplikacji dynamicznych",
      kategoria: "audytor",
      statusZadania: false
    },
    {
      id: 6,
      rodzajZadania: "Przeanalizować case studies audytów dostępności",
      opisZadania: "Praktyczne przykłady problemów i ich rozwiązań",
      kategoria: "audytor",
      statusZadania: false
    },
    // Specjalista dostępności
    {
      id: 7,
      rodzajZadania: "Opanować semantic HTML5",
      opisZadania: "Używanie właściwych tagów HTML dla lepszej struktury i dostępności",
      kategoria: "specjalista",
      statusZadania: false
    },
    {
      id: 8,
      rodzajZadania: "Nauczyć się implementacji ARIA attributes",
      opisZadania: "Dodawanie etykiet i opisów dla technologii wspomagających",
      kategoria: "specjalista",
      statusZadania: false
    },
    {
      id: 9,
      rodzajZadania: "Przećwiczyć tworzenie dostępnych formularzy",
      opisZadania: "Prawidłowe etykietowanie i walidacja z myślą o wszystkich użytkownikach",
      kategoria: "specjalista",
      statusZadania: false
    },
    {
      id: 10,
      rodzajZadania: "Zaimplementować focus management w React",
      opisZadania: "Kontrolowanie fokusa w aplikacjach SPA dla lepszej nawigacji",
      kategoria: "specjalista",
      statusZadania: false
    },
    {
      id: 11,
      rodzajZadania: "Poznać biblioteki dostępności (React Aria, Reach UI)",
      opisZadania: "Gotowe komponenty zgodne ze standardami dostępności",
      kategoria: "specjalista",
      statusZadania: false
    },
    {
      id: 12,
      rodzajZadania: "Stworzyć portfolio z dostępnymi komponentami",
      opisZadania: "Praktyczne przykłady pracy do pokazania pracodawcom",
      kategoria: "specjalista",
      statusZadania: false
    },
    // INF.04
    {
      id: 13,
      rodzajZadania: "Powtórzyć programowanie obiektowe",
      opisZadania: "Klasy, dziedziczenie, polimorfizm w wybranym języku",
      kategoria: "inf04",
      statusZadania: false
    },
    {
      id: 14,
      rodzajZadania: "Przećwiczyć wzorce projektowe",
      opisZadania: "Singleton, Factory, Observer i inne popularne wzorce",
      kategoria: "inf04",
      statusZadania: false
    },
    {
      id: 15,
      rodzajZadania: "Opanować testowanie jednostkowe",
      opisZadania: "Pisanie testów dla funkcji i metod aplikacji",
      kategoria: "inf04",
      statusZadania: false
    },
    {
      id: 16,
      rodzajZadania: "Powtórzyć struktury danych i algorytmy",
      opisZadania: "Listy, stosy, kolejki, sortowanie, wyszukiwanie",
      kategoria: "inf04",
      statusZadania: false
    },
    {
      id: 17,
      rodzajZadania: "Przećwiczyć zadania z poprzednich sesji INF.04",
      opisZadania: "Rozwiązywanie rzeczywistych zadań egzaminacyjnych",
      kategoria: "inf04",
      statusZadania: false
    },
    {
      id: 18,
      rodzajZadania: "Zrobić projekt aplikacji od A do Z",
      opisZadania: "Kompleksowe zadanie łączące wszystkie umiejętności",
      kategoria: "inf04",
      statusZadania: false
    },
    // INF.03
    {
      id: 19,
      rodzajZadania: "Powtórzyć HTML5 i CSS3",
      opisZadania: "Semantyczne znaczniki, flexbox, grid, animacje CSS",
      kategoria: "inf03",
      statusZadania: false
    },
    {
      id: 20,
      rodzajZadania: "Przećwiczyć JavaScript ES6+",
      opisZadania: "Nowoczesna składnia, async/await, moduły",
      kategoria: "inf03",
      statusZadania: false
    },
    {
      id: 21,
      rodzajZadania: "Opanować responsive web design",
      opisZadania: "Media queries, mobile-first approach",
      kategoria: "inf03",
      statusZadania: false
    },
    {
      id: 22,
      rodzajZadania: "Poznać podstawy frameworków (React/Vue)",
      opisZadania: "Komponenty, state management, routing",
      kategoria: "inf03",
      statusZadania: false
    },
    {
      id: 23,
      rodzajZadania: "Przećwiczyć zadania praktyczne z arkuszy CKE",
      opisZadania: "Rozwiązywanie oficjalnych zadań egzaminacyjnych",
      kategoria: "inf03",
      statusZadania: false
    },
    {
      id: 24,
      rodzajZadania: "Zrobić symulacje egzaminu INF.03",
      opisZadania: "Testy czasowe w warunkach zbliżonych do egzaminu",
      kategoria: "inf03",
      statusZadania: false
    }
  ]);
  
  const [rodzajZadania, setRodzajZadania] = useState('');
  const [opisZadania, setOpisZadania] = useState('');
  const [kategoria, setKategoria] = useState('audytor');

  const kategorie = [
    { key: "audytor", label: "🔍 Audytor dostępności cyfrowej" },
    { key: "specjalista", label: "💻 Specjalista dostępności" },
    { key: "inf04", label: "📱 INF.04 - Projektowanie aplikacji" },
    { key: "inf03", label: "🌐 INF.03 - Tworzenie stron internetowych" }
  ];

  const handleForm = (e) => {
    e.preventDefault();
    if (rodzajZadania.trim() !== '') {
      let new_id = 1;
      if (zadania.length > 0) {
        new_id = Math.max(...zadania.map(z => z.id)) + 1;
      }
      setZadania(prev => [
        ...prev,
        {
          id: new_id,
          rodzajZadania: rodzajZadania,
          opisZadania: opisZadania,
          kategoria: kategoria,
          statusZadania: false
        }
      ]);
      setRodzajZadania('');
      setOpisZadania('');
    } else {
      alert('Dodaj nowe zadanie!');
    }
  };

  const handleWykonane = (id) => {
    setZadania(zadania.map((zadanie) =>
      zadanie.id === id
        ? { ...zadanie, statusZadania: !zadanie.statusZadania }
        : zadanie
    ));
  };

  const handleUsun = (id) => {
    setZadania(zadania.filter((zadanie) => zadanie.id !== id));
  };

  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
          <h1>Lista zadań do ogarnięcia żeby wejść do IT: {zadania.length}</h1>
          
          {kategorie.map((kat) => {
            const zadaniaKategorii = zadania.filter(zadanie => zadanie.kategoria === kat.key);
            return zadaniaKategorii.length > 0 && (
              <div key={kat.key} className="mb-4">
                <h3>{kat.label}</h3>
                <ol>
                  {zadaniaKategorii.map((zadanie) => (
                    <li key={zadanie.id} className="mb-2">
                      <strong>{zadanie.rodzajZadania}</strong><br/>
                      <small className="text-muted">{zadanie.opisZadania}</small><br/>
                      <span className={`badge ${zadanie.statusZadania ? 'bg-success' : 'bg-secondary'}status-badge`}>
                        {zadanie.statusZadania ? "wykonane" : "niewykonane"}
                      </span>
                      <button className='m-2 btn btn-danger btn-sm' onClick={() => handleUsun(zadanie.id)}>Usuń</button>
                      <button className='m-2 btn btn-warning btn-sm' onClick={() => handleWykonane(zadanie.id)}>
                        {zadanie.statusZadania ? 'Cofnij' : 'Wykonane'}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}

          <h2>Dodaj zadanie:</h2>
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <select 
                className="form-select"
                value={kategoria}
                onChange={(e) => setKategoria(e.target.value)}
              >
                {kategorie.map(kat => (
                  <option key={kat.key} value={kat.key}>{kat.label}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <input
                type='text'
                className="form-control"
                placeholder='Rodzaj zadania'
                value={rodzajZadania}
                onChange={(e) => setRodzajZadania(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type='text'
                className="form-control"
                placeholder='Opis zadania'
                value={opisZadania}
                onChange={(e) => setOpisZadania(e.target.value)}
              />
            </div>
            <button type="submit" className='btn btn-success'>Dodaj</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;