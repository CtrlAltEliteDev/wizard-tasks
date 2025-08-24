import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, BookOpen, Code, Zap, Star, Calendar, Target, Trophy } from 'lucide-react';
import './codingTodo.css';

const HarryPotterCodingTodo = () => {
  // Helper functions for localStorage
  const loadFromStorage = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  const saveToStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  // Initialize state with localStorage data
  const [currentWeek, setCurrentWeek] = useState(() => loadFromStorage('wizardQuest_currentWeek', 1));
  const [completedTasks, setCompletedTasks] = useState(() => loadFromStorage('wizardQuest_completedTasks', {}));
  const [streak, setStreak] = useState(() => loadFromStorage('wizardQuest_streak', 0));
  const [totalProblems, setTotalProblems] = useState(() => loadFromStorage('wizardQuest_totalProblems', 0));
  const [problemStats, setProblemStats] = useState(() => loadFromStorage('wizardQuest_problemStats', {
    easy: 0,
    medium: 0,
    hard: 0
  }));

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToStorage('wizardQuest_currentWeek', currentWeek);
  }, [currentWeek]);

  useEffect(() => {
    saveToStorage('wizardQuest_completedTasks', completedTasks);
  }, [completedTasks]);

  useEffect(() => {
    saveToStorage('wizardQuest_streak', streak);
  }, [streak]);

  useEffect(() => {
    saveToStorage('wizardQuest_totalProblems', totalProblems);
  }, [totalProblems]);

  useEffect(() => {
    saveToStorage('wizardQuest_problemStats', problemStats);
  }, [problemStats]);

  

  // Coding mastery benchmarks
  const benchmarks = {
    beginner: { easy: 50, medium: 20, hard: 5, title: "Hogwarts First Year", description: "Basic spell casting" },
    intermediate: { easy: 100, medium: 50, hard: 20, title: "Advanced Student", description: "OWLS level proficiency" },
    advanced: { easy: 150, medium: 100, hard: 50, title: "Auror Candidate", description: "NEWTS level mastery" },
    expert: { easy: 200, medium: 150, hard: 80, title: "Ministry Official", description: "Professional level" },
    master: { easy: 300, medium: 200, hard: 120, title: "Order of Phoenix", description: "FAANG interview ready" },
    grandmaster: { easy: 500, medium: 350, hard: 200, title: "Dumbledore's Army", description: "World-class coder" },
    legend: { easy: 800, medium: 500, hard: 300, title: "Greatest Wizard", description: "Legendary status" }
  };

  const weeks = [
    {
      week: 1,
      title: "The Sorting Hat's Arrays & Strings",
      house: "Gryffindor",
      color: "linear-gradient(to right, #dc2626, #eab308)",
      accent: "#dc2626",
      dates: "Aug 24-30",
      target: 10,
      topics: ["Arrays", "Strings", "Two-pointer", "Sliding window"],
      deliverable: "String Toolbox CLI",
      tasks: [
        "Morning: 1 LeetCode Easy on arrays/strings",
        "Evening: Implement string utilities",
        "Weekend: Build CLI string toolbox",
        "Create 'ds-arrays-strings' repo"
      ]
    },
    {
      week: 2,
      title: "Whomping Willow's Linked Lists",
      house: "Ravenclaw",
      color: "linear-gradient(to right, #2563eb, #4f46e5)",
      accent: "#2563eb",
      dates: "Aug 31-Sep 6",
      target: 12,
      topics: ["Linked Lists", "Recursion", "Reverse operations"],
      deliverable: "LinkedList Library + Recursion Guide",
      tasks: [
        "Morning: LL operations (reverse, cycle, merge)",
        "Evening: Recursion drills & iterations",
        "Weekend: Implement LL from scratch",
        "Create recursion cheatsheet"
      ]
    },
    {
      week: 3,
      title: "Potions Master's Data Structures",
      house: "Slytherin",
      color: "linear-gradient(to right, #16a34a, #059669)",
      accent: "#16a34a",
      dates: "Sep 7-13",
      target: 14,
      topics: ["Stacks", "Queues", "Hashing", "Sliding Window"],
      deliverable: "Text Frequency API",
      tasks: [
        "Morning: Monotonic stack, parentheses problems",
        "Evening: Hash maps & sliding window patterns",
        "Weekend: Build FastAPI frequency analyzer",
        "Deploy top-K words service"
      ]
    },
    {
      week: 4,
      title: "Forbidden Forest Trees I",
      house: "Hufflepuff",
      color: "linear-gradient(to right, #eab308, #fb923c)",
      accent: "#eab308",
      dates: "Sep 14-20",
      target: 16,
      topics: ["Tree Traversal", "BST", "DFS/BFS"],
      deliverable: "Tree Visualizer",
      tasks: [
        "Morning: Pre/in/post order, level traversals",
        "Evening: Implement tree class & serializers",
        "Weekend: 3-4 tree problems",
        "Add tree visualization to project"
      ]
    },
    {
      week: 5,
      title: "Marauder's Map Graphs I",
      house: "Gryffindor",
      color: "linear-gradient(to right, #dc2626, #eab308)",
      accent: "#dc2626",
      dates: "Sep 21-27",
      target: 16,
      topics: ["BFS/DFS", "Graph Components", "Islands"],
      deliverable: "Graph Utilities Module",
      tasks: [
        "Morning: Classic BFS/DFS, islands, bipartite",
        "Evening: Build adjacency list/matrix helpers",
        "Weekend: 4-5 graph problems",
        "Create reusable graph module"
      ]
    },
    {
      week: 6,
      title: "Hermione's DP Spellbook I",
      house: "Ravenclaw",
      color: "linear-gradient(to right, #2563eb, #4f46e5)",
      accent: "#2563eb",
      dates: "Sep 28-Oct 4",
      target: 18,
      topics: ["1D DP", "Prefix sums", "Knapsack"],
      deliverable: "DP Template Guide",
      tasks: [
        "Morning: House robber, coin change, LIS",
        "Evening: Memoization vs tabulation",
        "Weekend: 4-5 DP problems",
        "Write comprehensive DP template"
      ]
    },
    {
      week: 7,
      title: "Advanced Transfiguration DP II",
      house: "Slytherin",
      color: "linear-gradient(to right, #16a34a, #059669)",
      accent: "#16a34a",
      dates: "Oct 5-11",
      target: 18,
      topics: ["2D DP", "Grid problems", "Backtracking"],
      deliverable: "DP Playbook",
      tasks: [
        "Morning: Edit distance, unique paths",
        "Evening: Backtracking patterns",
        "Weekend: Mixed DP/backtracking set",
        "Create 'dp-playbook.md'"
      ]
    },
    {
      week: 8,
      title: "Quidditch Priority Queues",
      house: "Hufflepuff",
      color: "linear-gradient(to right, #eab308, #fb923c)",
      accent: "#eab308",
      dates: "Oct 12-18",
      target: 16,
      topics: ["Heaps", "Greedy", "Intervals", "Priority Queue"],
      deliverable: "Project 1 MVP Deployed",
      tasks: [
        "Morning: Merge K lists, top-K problems",
        "Evening: Build task manager MVP",
        "Weekend: Deploy on Render/Vercel",
        "Create project README & screenshots"
      ]
    },
    {
      week: 9,
      title: "Hogwarts Architecture I",
      house: "Gryffindor",
      color: "linear-gradient(to right, #dc2626, #eab308)",
      accent: "#dc2626",
      dates: "Oct 19-25",
      target: 14,
      topics: ["System Design", "Scalability", "Caching", "Databases"],
      deliverable: "URL Shortener Design",
      tasks: [
        "Morning: Light LC maintenance",
        "Evening: SD fundamentals (load balancing, caching)",
        "Weekend: Design URL shortener end-to-end",
        "Create architecture diagram & doc"
      ]
    },
    {
      week: 10,
      title: "Ministry of Magic Systems II",
      house: "Ravenclaw",
      color: "linear-gradient(to right, #2563eb, #4f46e5)",
      accent: "#2563eb",
      dates: "Oct 26-Nov 1",
      target: 16,
      topics: ["Rate Limiting", "News Feeds", "Notifications"],
      deliverable: "Case Studies + LLD Class",
      tasks: [
        "Morning: LC mediums (graphs/DP)",
        "Evening: Rate limiter & news feed design",
        "Weekend: Build thread-safe LRU cache",
        "Document 2 system design cases"
      ]
    },
    {
      week: 11,
      title: "Order of Phoenix Systems III",
      house: "Slytherin",
      color: "linear-gradient(to right, #16a34a, #059669)",
      accent: "#16a34a",
      dates: "Nov 2-8",
      target: 16,
      topics: ["Social Media Design", "CDN", "Feed Ranking"],
      deliverable: "Instagram Design + Mocks",
      tasks: [
        "Morning: Mixed problem sets",
        "Evening: Design Instagram/Twitter scale",
        "Weekend: Conduct 2 mock interviews",
        "Document design decisions"
      ]
    },
    {
      week: 12,
      title: "Final OWLs Preparation",
      house: "Hufflepuff",
      color: "linear-gradient(to right, #eab308, #fb923c)",
      accent: "#eab308",
      dates: "Nov 9-21",
      target: 20,
      topics: ["Interview Prep", "Portfolio Polish", "Mock Practice"],
      deliverable: "Complete Interview Readiness",
      tasks: [
        "Morning: Timed problem practice",
        "Evening: Behavioral prep & resume polish",
        "Weekend: Full mock interviews",
        "Create 4-week follow-up plan"
      ]
    }
  ];

  const toggleTask = (weekNum, taskIndex) => {
    const key = `${weekNum}-${taskIndex}`;
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateProblemCount = (difficulty, increment = true) => {
    setProblemStats(prev => ({
      ...prev,
      [difficulty]: increment ? prev[difficulty] + 1 : Math.max(0, prev[difficulty] - 1)
    }));
  };

  const getCurrentLevel = () => {
    const total = problemStats.easy + problemStats.medium + problemStats.hard;
    
    if (problemStats.easy >= benchmarks.legend.easy && problemStats.medium >= benchmarks.legend.medium && problemStats.hard >= benchmarks.legend.hard) {
      return { level: 'legend', progress: 100 };
    } else if (problemStats.easy >= benchmarks.grandmaster.easy && problemStats.medium >= benchmarks.grandmaster.medium && problemStats.hard >= benchmarks.grandmaster.hard) {
      return { level: 'grandmaster', progress: 85 };
    } else if (problemStats.easy >= benchmarks.master.easy && problemStats.medium >= benchmarks.master.medium && problemStats.hard >= benchmarks.master.hard) {
      return { level: 'master', progress: 70 };
    } else if (problemStats.easy >= benchmarks.expert.easy && problemStats.medium >= benchmarks.expert.medium && problemStats.hard >= benchmarks.expert.hard) {
      return { level: 'expert', progress: 55 };
    } else if (problemStats.easy >= benchmarks.advanced.easy && problemStats.medium >= benchmarks.advanced.medium && problemStats.hard >= benchmarks.advanced.hard) {
      return { level: 'advanced', progress: 40 };
    } else if (problemStats.easy >= benchmarks.intermediate.easy && problemStats.medium >= benchmarks.intermediate.medium && problemStats.hard >= benchmarks.intermediate.hard) {
      return { level: 'intermediate', progress: 25 };
    } else {
      return { level: 'beginner', progress: Math.min(20, (total / 75) * 20) };
    }
  };

  const getCompletedCount = (weekNum) => {
    return weeks[weekNum - 1].tasks.filter((_, index) => 
      completedTasks[`${weekNum}-${index}`]
    ).length;
  };

  // Reset all progress (emergency button)
  const resetAllProgress = () => {
    if (window.confirm('🧙‍♂️ Are you sure you want to reset ALL your magical progress? This cannot be undone!')) {
      localStorage.removeItem('wizardQuest_currentWeek');
      localStorage.removeItem('wizardQuest_completedTasks');
      localStorage.removeItem('wizardQuest_streak');
      localStorage.removeItem('wizardQuest_totalProblems');
      localStorage.removeItem('wizardQuest_problemStats');
      
      setCurrentWeek(1);
      setCompletedTasks({});
      setStreak(0);
      setTotalProblems(0);
      setProblemStats({ easy: 0, medium: 0, hard: 0 });
      
      alert('✨ All progress has been reset! Your magical journey begins anew!');
    }
  };

  useEffect(() => {
    const completed = Object.values(completedTasks).filter(Boolean).length;
    setTotalProblems(problemStats.easy + problemStats.medium + problemStats.hard);
    
    // Calculate streak (simplified)
    let currentStreak = 0;
    for (let i = Object.keys(completedTasks).length - 1; i >= 0; i--) {
      if (Object.values(completedTasks)[i]) {
        currentStreak++;
      } else {
        break;
      }
    }
    setStreak(currentStreak);
  }, [completedTasks, problemStats]);

  const currentWeekData = weeks[currentWeek - 1];
  const currentLevel = getCurrentLevel();
  const currentBenchmark = benchmarks[currentLevel.level];

  return (
    <div>
      <div className="wizard-quest-container">
        {/* Magical Background Elements */}
        <div className="magical-sparkles">
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="sparkle sparkle-3"></div>
          <div className="sparkle sparkle-4"></div>
        </div>

        <div className="main-content">
          {/* Header */}
          <div className="header">
            <div className="header-title-row">
              <Zap style={{ width: '2rem', height: '2rem', color: '#fbbf24' }} />
              <h1 className="main-title">Wizard's Coding Quest</h1>
              <Zap style={{ width: '2rem', height: '2rem', color: '#fbbf24' }} />
            </div>
            <p className="subtitle">90-Day Journey to Master the Dark Arts of DSA</p>
            <p className="description">Transform into the greatest coder the wizarding world has ever seen ⚡</p>
          </div>

          {/* Stats Dashboard */}
          <div className="stats-grid">
            <div className="stat-card stat-card-purple">
              <Calendar style={{ width: '1.5rem', height: '1.5rem', color: '#a855f7' }} />
              <div>
                <p className="stat-label">Current Week</p>
                <p className="stat-value" style={{ color: '#c084fc' }}>{currentWeek}/12</p>
              </div>
            </div>
            
            <div className="stat-card stat-card-green">
              <Target style={{ width: '1.5rem', height: '1.5rem', color: '#4ade80' }} />
              <div>
                <p className="stat-label">Total Problems</p>
                <p className="stat-value" style={{ color: '#86efac' }}>{totalProblems}</p>
              </div>
            </div>
            
            <div className="stat-card stat-card-orange">
              <Star style={{ width: '1.5rem', height: '1.5rem', color: '#fb923c' }} />
              <div>
                <p className="stat-label">Current Streak</p>
                <p className="stat-value" style={{ color: '#fdba74' }}>{streak} days</p>
              </div>
            </div>
            
            <div className="stat-card stat-card-yellow">
              <Trophy style={{ width: '1.5rem', height: '1.5rem', color: '#fbbf24' }} />
              <div>
                <p className="stat-label">Wizard Level</p>
                <p className="stat-value" style={{ color: '#fde047', fontSize: '1.125rem' }}>{currentBenchmark.title}</p>
              </div>
            </div>
          </div>

          {/* Problem Tracker */}
          <div className="problem-tracker">
            <h3 className="section-title">
              <Code style={{ width: '1.5rem', height: '1.5rem', color: '#a855f7' }} />
              Spell Mastery Tracker
            </h3>
            
            <div className="problem-cards-grid">
              {/* Easy Problems */}
              <div className="problem-card problem-card-easy">
                <div className="problem-card-header">
                  <h4 className="problem-title" style={{ color: '#4ade80' }}>🟢 Easy Spells</h4>
                  <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Beginner Magic</span>
                </div>
                <div className="problem-counter">
                  <button 
                    onClick={() => updateProblemCount('easy', false)}
                    className="counter-button"
                    style={{ backgroundColor: '#dc2626' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
                  >
                    -
                  </button>
                  <span className="counter-value" style={{ color: '#86efac' }}>
                    {problemStats.easy}
                  </span>
                  <button 
                    onClick={() => updateProblemCount('easy', true)}
                    className="counter-button"
                    style={{ backgroundColor: '#16a34a' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#22c55e'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
                  >
                    +
                  </button>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  Next milestone: <span style={{ color: '#4ade80', fontWeight: '600' }}>
                    {Object.values(benchmarks).find(b => b.easy > problemStats.easy)?.easy || 'Max level!'} problems
                  </span>
                </div>
              </div>

              {/* Medium Problems */}
              <div className="problem-card problem-card-medium">
                <div className="problem-card-header">
                  <h4 className="problem-title" style={{ color: '#fbbf24' }}>🟡 Medium Spells</h4>
                  <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Advanced Magic</span>
                </div>
                <div className="problem-counter">
                  <button 
                    onClick={() => updateProblemCount('medium', false)}
                    className="counter-button"
                    style={{ backgroundColor: '#dc2626' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
                  >
                    -
                  </button>
                  <span className="counter-value" style={{ color: '#fde047' }}>
                    {problemStats.medium}
                  </span>
                  <button 
                    onClick={() => updateProblemCount('medium', true)}
                    className="counter-button"
                    style={{ backgroundColor: '#ca8a04' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#eab308'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#ca8a04'}
                  >
                    +
                  </button>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  Next milestone: <span style={{ color: '#fbbf24', fontWeight: '600' }}>
                    {Object.values(benchmarks).find(b => b.medium > problemStats.medium)?.medium || 'Max level!'} problems
                  </span>
                </div>
              </div>

              {/* Hard Problems */}
              <div className="problem-card problem-card-hard">
                <div className="problem-card-header">
                  <h4 className="problem-title" style={{ color: '#f87171' }}>🔴 Hard Spells</h4>
                  <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Dark Arts</span>
                </div>
                <div className="problem-counter">
                  <button 
                    onClick={() => updateProblemCount('hard', false)}
                    className="counter-button"
                    style={{ backgroundColor: '#dc2626' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
                  >
                    -
                  </button>
                  <span className="counter-value" style={{ color: '#fca5a5' }}>
                    {problemStats.hard}
                  </span>
                  <button 
                    onClick={() => updateProblemCount('hard', true)}
                    className="counter-button"
                    style={{ backgroundColor: '#dc2626' }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
                  >
                    +
                  </button>
                </div>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  Next milestone: <span style={{ color: '#f87171', fontWeight: '600' }}>
                    {Object.values(benchmarks).find(b => b.hard > problemStats.hard)?.hard || 'Max level!'} problems
                  </span>
                </div>
              </div>
            </div>

            {/* Current Level Display */}
            <div className="current-level">
              <div className="level-header">
                <div>
                  <h4 className="level-title">{currentBenchmark.title}</h4>
                  <p style={{ color: '#9ca3af' }}>{currentBenchmark.description}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.875rem', marginBottom: '0.5rem' }}>
                    {currentLevel.level === 'legend' ? '🧙‍♂️' : 
                     currentLevel.level === 'grandmaster' ? '⚡' :
                     currentLevel.level === 'master' ? '🏆' :
                     currentLevel.level === 'expert' ? '🎖️' :
                     currentLevel.level === 'advanced' ? '🎓' :
                     currentLevel.level === 'intermediate' ? '📚' : '🪄'}
                  </div>
                </div>
              </div>
              
              <div className="progress-section">
                <div className="progress-header">
                  <span style={{ color: '#9ca3af' }}>Progress to next level</span>
                  <span style={{ color: '#c084fc' }}>{currentLevel.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${currentLevel.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmarks Reference */}
          <div className="problem-tracker">
            <h3 className="section-title">
              <Trophy style={{ width: '1.5rem', height: '1.5rem', color: '#fbbf24' }} />
              Path to Greatness - Mastery Levels
            </h3>
            
            <div className="benchmarks-grid">
              {Object.entries(benchmarks).map(([key, benchmark]) => {
                const isCurrentLevel = key === currentLevel.level;
                const isCompleted = problemStats.easy >= benchmark.easy && 
                                  problemStats.medium >= benchmark.medium && 
                                  problemStats.hard >= benchmark.hard;
                
                return (
                  <div 
                    key={key}
                    className={`benchmark-card ${
                      isCurrentLevel 
                        ? 'benchmark-card-current' 
                        : isCompleted
                          ? 'benchmark-card-completed'
                          : 'benchmark-card-default'
                    }`}
                  >
                    <div className="benchmark-header">
                      <h4 className="benchmark-title" style={{
                        color: isCurrentLevel ? '#c084fc' : 
                               isCompleted ? '#4ade80' : '#d1d5db'
                      }}>
                        {benchmark.title}
                      </h4>
                      {isCompleted && <span style={{ color: '#4ade80' }}>✓</span>}
                      {isCurrentLevel && <span style={{ color: '#a855f7' }}>👑</span>}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.75rem' }}>
                      {benchmark.description}
                    </p>
                    <div className="benchmark-stats">
                      <div className="benchmark-stat">
                        <span style={{ color: '#4ade80' }}>Easy:</span>
                        <span style={{ 
                          color: problemStats.easy >= benchmark.easy ? '#4ade80' : '#6b7280' 
                        }}>
                          {benchmark.easy}
                        </span>
                      </div>
                      <div className="benchmark-stat">
                        <span style={{ color: '#fbbf24' }}>Medium:</span>
                        <span style={{ 
                          color: problemStats.medium >= benchmark.medium ? '#fbbf24' : '#6b7280' 
                        }}>
                          {benchmark.medium}
                        </span>
                      </div>
                      <div className="benchmark-stat">
                        <span style={{ color: '#f87171' }}>Hard:</span>
                        <span style={{ 
                          color: problemStats.hard >= benchmark.hard ? '#f87171' : '#6b7280' 
                        }}>
                          {benchmark.hard}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="pro-tips">
              <h4 className="pro-tips-title">🌟 Pro Tips for World-Class Coding</h4>
              <ul className="pro-tips-list">
                <li>• <strong>Quality over quantity:</strong> Focus on understanding patterns, not just solving count</li>
                <li>• <strong>Spaced repetition:</strong> Review solved problems weekly to retain patterns</li>
                <li>• <strong>Build projects:</strong> Apply DSA knowledge to real-world applications</li>
                <li>• <strong>System design:</strong> Master distributed systems for senior roles</li>
                <li>• <strong>Open source:</strong> Contribute to popular repositories</li>
                <li>• <strong>Mock interviews:</strong> Practice explaining solutions clearly</li>
              </ul>
            </div>
          </div>

          {/* Week Navigation */}
          <div className="week-nav">
            {weeks.map((week) => (
              <button
                key={week.week}
                onClick={() => setCurrentWeek(week.week)}
                className={`week-button ${
                  currentWeek === week.week ? 'week-button-active' : 'week-button-inactive'
                }`}
                style={currentWeek === week.week ? { 
                  background: week.color 
                } : {}}
              >
                Week {week.week}
              </button>
            ))}
          </div>

          {/* Current Week Details */}
          <div className="current-week" style={{ 
            background: currentWeekData.color,
            borderColor: currentWeekData.accent 
          }}>
            <div className="week-content">
              <div className="week-header">
                <div>
                  <h2 className="week-title">{currentWeekData.title}</h2>
                  <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>
                    {currentWeekData.house} House • {currentWeekData.dates}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '0.875rem', opacity: 0.75 }}>Target Problems</p>
                  <p style={{ fontSize: '1.875rem', fontWeight: '700' }}>{currentWeekData.target}</p>
                </div>
              </div>
              
              <div className="week-details">
                <div>
                  <h3 className="week-section-title">
                    <BookOpen style={{ width: '1.25rem', height: '1.25rem' }} />
                    Magical Topics
                  </h3>
                  <div className="topics-container">
                    {currentWeekData.topics.map((topic, index) => (
                      <span key={index} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="week-section-title">
                    <Code style={{ width: '1.25rem', height: '1.25rem' }} />
                    Quest Reward
                  </h3>
                  <p className="deliverable-box">
                    {currentWeekData.deliverable}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Tasks */}
          <div className="daily-tasks">
            <div className="tasks-header">
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>Daily Quests</h3>
              <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                {getCompletedCount(currentWeek)}/{currentWeekData.tasks.length} completed
              </div>
            </div>
            
            <div className="tasks-list">
              {currentWeekData.tasks.map((task, index) => {
                const isCompleted = completedTasks[`${currentWeek}-${index}`];
                return (
                  <div
                    key={index}
                    className={`task-item ${
                      isCompleted ? 'task-completed' : 'task-pending'
                    }`}
                    onClick={() => toggleTask(currentWeek, index)}
                  >
                    {isCompleted ? (
                      <CheckCircle style={{ 
                        width: '1.5rem', 
                        height: '1.5rem', 
                        color: '#4ade80', 
                        flexShrink: 0, 
                        marginTop: '0.125rem' 
                      }} />
                    ) : (
                      <Circle style={{ 
                        width: '1.5rem', 
                        height: '1.5rem', 
                        color: '#9ca3af', 
                        flexShrink: 0, 
                        marginTop: '0.125rem' 
                      }} />
                    )}
                    <div style={{ flex: 1 }}>
                      <p className={isCompleted ? 'task-text-completed' : ''} 
                         style={{ 
                           fontWeight: '500',
                           color: isCompleted ? '#9ca3af' : 'white'
                         }}>
                        {task}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="overall-progress">
            <div className="progress-title-section">
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Overall Quest Progress</h3>
              <span style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                {Math.round((Object.values(completedTasks).filter(Boolean).length / (weeks.length * 4)) * 100)}% Complete
              </span>
            </div>
            <div className="overall-progress-bar">
              <div
                className="overall-progress-fill"
                style={{
                  width: `${(Object.values(completedTasks).filter(Boolean).length / (weeks.length * 4)) * 100}%`
                }}
              ></div>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '0.5rem' }}>
              "It is our choices that show what we truly are, far more than our abilities." - Dumbledore ⚡
            </p>
          </div>
        </div>

        {/* Reset Button (Emergency Use Only) */}
        <button 
          className="reset-button"
          onClick={resetAllProgress}
          title="⚠️ Reset All Progress (Emergency Use Only)"
        >
          🔄 Reset Quest
        </button>
      </div>
    </div>
  );
};

export default HarryPotterCodingTodo;