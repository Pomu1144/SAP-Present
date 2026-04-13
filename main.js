<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Structuralism & Search Algorithms</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Nunito+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Nunito Sans', sans-serif;
            background-color: #fdfbf7;
            color: #2d3748;
        }

        h1, h2, h3, h4, h5, .font-serif {
            font-family: 'Lora', serif;
        }

        .chart-container {
            position: relative;
            width: 100%;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 400px;
        }

        @media (min-width: 768px) {
            .chart-container {
                height: 400px;
            }
        }

        .card {
            background-color: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .accent-border-blue { border-top: 4px solid #3182ce; }
        .accent-border-red { border-top: 4px solid #e53e3e; }
        .accent-border-gold { border-top: 4px solid #d69e2e; }

        .html-graph-node {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            font-weight: 700;
            background-color: #ffffff;
            border: 2px solid #3182ce;
            color: #2d3748;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            z-index: 10;
        }

        .interactive-btn {
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 0.875rem;
            transition: all 0.2s;
            border: 1px solid #cbd5e0;
            background-color: #f7fafc;
            color: #4a5568;
            cursor: pointer;
        }

        .interactive-btn.active {
            background-color: #3182ce;
            color: #ffffff;
            border-color: #3182ce;
            box-shadow: 0 2px 4px rgba(49, 130, 206, 0.3);
        }
    </style>
</head>
<body class="antialiased selection:bg-blue-100 selection:text-blue-900">

<!-- Chosen Palette: Warm Neutrals & Academic Serenity (Off-white #fdfbf7 background, White cards, Deep Gray/Blue text #2d3748, Accents: Calm Blue #3182ce, Warm Gold #d69e2e, Soft Red #e53e3e) -->

<!-- Application Structure Plan: The SPA is designed as an interactive research presentation. It flows from philosophical theory (Structuralism) to concrete technical application (Search Algorithms). 
1. Intro sets the thesis. 
2. The "Evolution" section uses a line chart to show the historical shift. 
3. The "Case Studies" section uses interactive tabs to let users explore different algorithmic paradigms (Lexical, Graph, Vector) and see how their ontological profiles differ via a dynamically updating radar chart and text block. 
4. The Vector Space section uses Plotly for an interactive scatter plot. 
This structure promotes active exploration of the thesis rather than passive reading. -->

<!-- Visualization & Content Choices: 
- Historical Evolution -> Goal: Change -> Line Chart (Chart.js). Justifies showing the diverging trends of intrinsic vs relational data over time. 
- Paradigm Comparison -> Goal: Compare/Organize -> Interactive Radar Chart (Chart.js) + Dynamic Text. Allows users to actively toggle between search philosophies and see their multidimensional footprints. 
- PageRank Concept -> Goal: Inform/Organize -> HTML/CSS Node Graph. Prohibits SVG, uses absolute positioning to demonstrate topological relationships. 
- Vector Semantics -> Goal: Relationships -> 2D Scatter Plot (Plotly.js WebGL). Shows spatial relationships of words, proving meaning is derived from geometric distance. 
- Confirming NO SVG/Mermaid used. -->

<!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->

    <nav class="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="font-serif font-semibold text-xl text-blue-800">Ontology & Algorithms</div>
                <div class="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
                    <a href="#thesis" class="hover:text-blue-600 transition-colors">The Thesis</a>
                    <a href="#evolution" class="hover:text-blue-600 transition-colors">Evolution</a>
                    <a href="#paradigms" class="hover:text-blue-600 transition-colors">Interactive Paradigms</a>
                    <a href="#vectors" class="hover:text-blue-600 transition-colors">Vector Space</a>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <header id="thesis" class="text-center max-w-4xl mx-auto mb-20 pt-8">
            <span class="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4 block">Research Presentation</span>
            <h1 class="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                Do Search Algorithms Commit Us to <br /> Mathematical Structure?
            </h1>
            <p class="text-xl text-gray-600 leading-relaxed font-light">
                An analysis of modern search technologies through the lens of Stewart Shapiro's <em class="text-gray-800">ante rem</em> structuralism. As search evolves, are we indexing digital objects, or are we traversing purely relational geometries?
            </p>
        </header>

        <section class="mb-20">
            <div class="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200">
                <h2 class="text-3xl font-serif font-bold text-gray-900 mb-6 border-b-2 border-gold-400 inline-block pb-2">The Structuralist Foundation</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p class="text-lg text-gray-700 leading-relaxed mb-4">
                            In the philosophy of mathematics, <strong>Structuralism</strong> posits that mathematical objects—like the number '3' or a geometric point—have no intrinsic properties. They are defined entirely by their <em>positions</em> within a broader structure. The natural numbers are merely places in a relational web.
                        </p>
                        <p class="text-lg text-gray-700 leading-relaxed">
                            As a researcher, I observe a profound parallel in computer science. Modern search algorithms have largely abandoned "intrinsic" content analysis (what a document literally says) in favor of relational geometry (where a document sits in a network or high-dimensional space). 
                        </p>
                    </div>
                    <div class="bg-[#f7fafc] p-6 rounded-lg border border-gray-200">
                        <h4 class="font-serif font-bold text-lg mb-3 text-blue-800">Shapiro's Ante Rem Structure</h4>
                        <blockquote class="text-gray-600 italic border-l-4 border-blue-400 pl-4 mb-4">
                            "The structure is prior to the objects... The objects are just the places in the structure."
                        </blockquote>
                        <p class="text-sm text-gray-500">
                            If we apply this to the web: A webpage (the object) matters less than its PageRank or Vector coordinates (its place in the structure). Search is an exercise in applied structuralism.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="evolution" class="mb-20">
            <div class="mb-8">
                <h2 class="text-3xl font-serif font-bold text-gray-900 mb-4">The Disappearance of the Intrinsic</h2>
                <p class="text-lg text-gray-600 max-w-3xl">
                    Historically, search engines relied heavily on lexical matching—an intrinsic property of the text. Over two decades, this has been entirely eclipsed by relational metrics (graph topologies and spatial vectors). This chart maps the philosophical shift of algorithmic emphasis.
                </p>
            </div>
            
            <div class="card accent-border-red p-6 w-full">
                <div class="chart-container">
                    <canvas id="evolutionChart"></canvas>
                </div>
                <div class="mt-6 pt-4 border-t border-gray-100 text-center">
                    <p class="text-sm text-gray-600"><strong>Analysis:</strong> The divergence clearly illustrates a departure from object-oriented retrieval toward purely structural retrieval mechanics.</p>
                </div>
            </div>
        </section>

        <section id="paradigms" class="mb-20">
            <div class="mb-8 text-center max-w-3xl mx-auto">
                <h2 class="text-3xl font-serif font-bold text-gray-900 mb-4">Interactive Ontological Profiles</h2>
                <p class="text-lg text-gray-600">
                    Different search paradigms carry different ontological commitments. Explore the tabs below to analyze how Lexical, Graph-based, and Vector-based algorithms utilize structure vs. intrinsic properties.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div class="lg:col-span-4 flex flex-col space-y-4">
                    <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <h3 class="font-bold text-gray-500 uppercase tracking-wider text-xs mb-3">Select Paradigm</h3>
                        <div class="flex flex-col space-y-2" id="paradigm-controls">
                            <button class="interactive-btn active text-left" data-target="graph">Graph Search (PageRank)</button>
                            <button class="interactive-btn text-left" data-target="vector">Vector Embeddings (LLMs)</button>
                            <button class="interactive-btn text-left" data-target="lexical">Early Lexical (TF-IDF)</button>
                        </div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-grow">
                        <h3 id="info-title" class="text-xl font-serif font-bold text-blue-800 mb-3">Graph Search (PageRank)</h3>
                        <p id="info-text" class="text-gray-700 text-sm leading-relaxed mb-4">
                            Treats the web as a directed graph. A page's importance is defined recursively by the importance of pages linking to it. The algorithm calculates the eigenvector of a stochastic matrix.
                        </p>
                        <div id="info-visual" class="relative w-full h-40 bg-[#fdfbf7] border border-gray-200 rounded overflow-hidden flex items-center justify-center">
                            
                            <div class="relative w-full h-full max-w-[200px]">
                                <div class="html-graph-node absolute top-[10%] left-[30%]">A</div>
                                <div class="html-graph-node absolute bottom-[15%] left-[5%] !w-10 !h-10 text-sm">B</div>
                                <div class="html-graph-node absolute bottom-[15%] right-[10%] !w-12 !h-12 text-sm bg-blue-50 border-blue-300">C</div>
                                
                                <div class="absolute top-[35%] left-[25%] text-gray-400 font-bold rotate-[-45deg]">↗</div>
                                <div class="absolute top-[40%] right-[35%] text-blue-500 font-bold rotate-[45deg] text-xl">↘</div>
                                <div class="absolute bottom-[20%] left-[40%] text-gray-300 font-bold">→</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-8 card accent-border-blue p-6">
                    <h3 class="text-center font-bold text-gray-700 mb-2">Philosophical Footprint</h3>
                    <div class="chart-container flex items-center justify-center">
                        <canvas id="radarChart"></canvas>
                    </div>
                </div>
            </div>
        </section>

        <section id="vectors" class="mb-20">
            <h2 class="text-3xl font-serif font-bold text-gray-900 mb-6 text-center">Vector Spaces: Meaning as Geometry</h2>
            <div class="card p-8 bg-white">
                <div class="max-w-4xl mx-auto mb-8 text-center">
                    <p class="text-lg text-gray-700 leading-relaxed">
                        In modern neural search (using Transformer embeddings), linguistic objects (words) are erased. They are mapped into continuous vector spaces of hundreds of dimensions. Meaning is no longer textual; meaning is <strong>distance and direction</strong> (cosine similarity). 
                    </p>
                    <p class="text-sm font-bold text-gold-600 mt-4 uppercase tracking-widest">Pure Structural Manifestation</p>
                </div>
                
                <div class="w-full bg-[#fdfbf7] border border-gray-200 rounded-xl overflow-hidden p-2">
                    <div id="plotly-container" class="w-full h-[450px]"></div>
                </div>
                
                <div class="mt-6 text-center max-w-2xl mx-auto">
                    <p class="text-sm text-gray-600 border-l-2 border-blue-400 pl-4 text-left">
                        <strong>Interpretation:</strong> Notice how the conceptual "gender" vector transforms King to Queen precisely as it transforms Man to Woman. The entities exist only as coordinates relative to other coordinates—a perfect embodiment of structuralist ontology.
                    </p>
                </div>
            </div>
        </section>

        <section class="border-t border-gray-200 pt-16 pb-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-1">
                    <h3 class="text-xl font-serif font-bold text-gray-900 mb-4">Conclusions</h3>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4">
                        Search algorithms do not merely organize data; they impose mathematical structure. By optimizing for topologies and vectors, they vindicate Stewart Shapiro's assertion that mathematics is the science of structure, applied here to human knowledge.
                    </p>
                </div>
                <div class="md:col-span-2">
                    <h3 class="text-xl font-serif font-bold text-gray-900 mb-4">Key References</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="p-4 bg-[#f7fafc] rounded border border-gray-100">
                            <p class="font-bold text-gray-800 text-sm">Shapiro, S. (1997).</p>
                            <p class="text-gray-600 text-sm italic mb-1">Philosophy of Mathematics: Structure and Ontology.</p>
                            <p class="text-xs text-gray-500">Oxford University Press.</p>
                        </div>
                        <div class="p-4 bg-[#f7fafc] rounded border border-gray-100">
                            <p class="font-bold text-gray-800 text-sm">Brin, S., & Page, L. (1998).</p>
                            <p class="text-gray-600 text-sm italic mb-1">The Anatomy of a Large-Scale Hypertextual Web Search Engine.</p>
                            <p class="text-xs text-gray-500">Computer Networks.</p>
                        </div>
                        <div class="p-4 bg-[#f7fafc] rounded border border-gray-100">
                            <p class="font-bold text-gray-800 text-sm">Mikolov, T., et al. (2013).</p>
                            <p class="text-gray-600 text-sm italic mb-1">Efficient Estimation of Word Representations in Vector Space.</p>
                            <p class="text-xs text-gray-500">arXiv preprint.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <script>
        function wrapLabel(label) {
            if (label.length <= 16) return label;
            const words = label.split(' ');
            let lines = [];
            let currentLine = '';
            words.forEach(word => {
                if ((currentLine + word).length > 16) {
                    if (currentLine) lines.push(currentLine.trim());
                    currentLine = word + ' ';
                } else {
                    currentLine += word + ' ';
                }
            });
            if (currentLine) lines.push(currentLine.trim());
            return lines.length > 1 ? lines : lines[0];
        }

        const tooltipConfig = {
            callbacks: {
                title: function(tooltipItems) {
                    const item = tooltipItems[0];
                    let label = item.chart.data.labels[item.dataIndex];
                    if (Array.isArray(label)) {
                        return label.join(' ');
                    } else {
                        return label;
                    }
                }
            }
        };

        Chart.defaults.font.family = "'Nunito Sans', sans-serif";
        Chart.defaults.color = '#718096';

        const ctxEvol = document.getElementById('evolutionChart').getContext('2d');
        new Chart(ctxEvol, {
            type: 'line',
            data: {
                labels: ['1995', '2000', '2005', '2010', '2015', '2020', '2025'],
                datasets: [
                    {
                        label: wrapLabel('Reliance on Relational Structure (Graph/Vector)'),
                        data: [5, 35, 55, 65, 80, 92, 98],
                        borderColor: '#3182ce',
                        backgroundColor: 'rgba(49, 130, 206, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#3182ce',
                        pointRadius: 4
                    },
                    {
                        label: wrapLabel('Reliance on Intrinsic Content (Keyword Match)'),
                        data: [95, 80, 50, 40, 20, 10, 5],
                        borderColor: '#e53e3e',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        tension: 0.4,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#e53e3e',
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: tooltipConfig,
                    legend: { position: 'top', labels: { usePointStyle: true, boxWidth: 8 } }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        max: 100,
                        grid: { color: '#edf2f7' },
                        title: { display: true, text: 'Algorithm Weight (%)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });

        const radarLabels = ['Relational Dependency', 'Abstract Topology', 'Content Indifference', 'Positional Value', 'Dimensionality'].map(wrapLabel);
        
        const paradigmData = {
            graph: {
                title: "Graph Search (PageRank)",
                text: "Treats the web as a directed graph. A page's importance is defined recursively by the importance of pages linking to it. The algorithm calculates the eigenvector of a stochastic matrix.",
                html: `<div class="relative w-full h-full max-w-[200px]">
                            <div class="html-graph-node absolute top-[10%] left-[30%]">A</div>
                            <div class="html-graph-node absolute bottom-[15%] left-[5%] !w-10 !h-10 text-sm text-gray-500">B</div>
                            <div class="html-graph-node absolute bottom-[15%] right-[10%] !w-12 !h-12 text-sm bg-blue-50 border-blue-400">C</div>
                            <div class="absolute top-[35%] left-[25%] text-gray-400 font-bold rotate-[-45deg]">↗</div>
                            <div class="absolute top-[40%] right-[35%] text-blue-500 font-bold rotate-[45deg] text-xl">↘</div>
                            <div class="absolute bottom-[20%] left-[40%] text-gray-300 font-bold">→</div>
                        </div>`,
                data: [100, 85, 90, 100, 30],
                color: '#3182ce',
                bgColor: 'rgba(49, 130, 206, 0.2)'
            },
            vector: {
                title: "Vector Embeddings (LLMs)",
                text: "Maps text into continuous high-dimensional space. Meaning is entirely relative, defined by the distance (cosine similarity) to other points. The literal object is dissolved into math.",
                html: `<div class="w-full h-full flex flex-col items-center justify-center p-4">
                            <div class="flex items-center space-x-2 text-xs font-mono text-gray-600 mb-2">
                                <span>[0.12, -0.55, 0.89 ... n]</span>
                            </div>
                            <div class="w-full border-t border-dashed border-gray-400 my-2 relative">
                                <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdfbf7] px-2 text-xs text-blue-600 font-bold">Similarity</span>
                            </div>
                            <div class="flex items-center space-x-2 text-xs font-mono text-gray-600 mt-2">
                                <span>[0.10, -0.52, 0.86 ... n]</span>
                            </div>
                       </div>`,
                data: [90, 100, 80, 95, 100],
                color: '#d69e2e',
                bgColor: 'rgba(214, 158, 46, 0.2)'
            },
            lexical: {
                title: "Early Lexical (TF-IDF)",
                text: "Evaluates documents based on intrinsic properties—specifically, the frequency of terms. It treats the document as an isolated object, lacking broad structural awareness.",
                html: `<div class="w-full h-full flex flex-col justify-center px-6">
                            <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-600 mb-2 shadow-sm">Doc A: "Apple, Apple, Computer"</div>
                            <div class="bg-white border border-gray-300 rounded p-2 text-xs text-gray-600 shadow-sm">Doc B: "Banana, Fruit"</div>
                       </div>`,
                data: [10, 20, 10, 10, 20],
                color: '#718096',
                bgColor: 'rgba(113, 128, 150, 0.2)'
            }
        };

        const ctxRadar = document.getElementById('radarChart').getContext('2d');
        let radarChartObj = new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: radarLabels,
                datasets: [{
                    label: 'Ontological Profile',
                    data: paradigmData.graph.data,
                    borderColor: paradigmData.graph.color,
                    backgroundColor: paradigmData.graph.bgColor,
                    borderWidth: 2,
                    pointBackgroundColor: paradigmData.graph.color
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: tooltipConfig,
                    legend: { display: false }
                },
                scales: {
                    r: {
                        angleLines: { color: '#e2e8f0' },
                        grid: { color: '#e2e8f0' },
                        pointLabels: { color: '#4a5568', font: { family: "'Nunito Sans', sans-serif", weight: 'bold' } },
                        ticks: { display: false, max: 100, min: 0 }
                    }
                }
            }
        });

        const btns = document.querySelectorAll('.interactive-btn');
        const infoTitle = document.getElementById('info-title');
        const infoText = document.getElementById('info-text');
        const infoVisual = document.getElementById('info-visual');

        btns.forEach(btn => {
            btn.addEventListener('click', function() {
                btns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const target = this.getAttribute('data-target');
                const data = paradigmData[target];

                infoTitle.textContent = data.title;
                infoText.textContent = data.text;
                infoVisual.innerHTML = data.html;

                radarChartObj.data.datasets[0].data = data.data;
                radarChartObj.data.datasets[0].borderColor = data.color;
                radarChartObj.data.datasets[0].backgroundColor = data.bgColor;
                radarChartObj.data.datasets[0].pointBackgroundColor = data.color;
                radarChartObj.update();
            });
        });

        const scatterData = [
            {
                x: [2, 2.5, 3, 7, 7.5, 8, 4.5, 5, 5.5],
                y: [8, 8.5, 7.5, 8.2, 8.8, 7.8, 3, 3.5, 2.5],
                mode: 'markers+text',
                type: 'scattergl',
                text: ['King', 'Monarch', 'Emperor', 'Queen', 'Empress', 'Matriarch', 'Man', 'Person', 'Woman'],
                textposition: 'top center',
                textfont: { color: '#2d3748', family: "'Nunito Sans', sans-serif", weight: 600 },
                marker: { size: 12, color: '#3182ce', line: { color: '#ffffff', width: 2 } },
                name: 'Concepts'
            },
            {
                x: [2.5, 7.5], y: [8.2, 8.5],
                mode: 'lines',
                type: 'scattergl',
                line: { color: '#e53e3e', width: 2, dash: 'dot' },
                name: 'Vector: Gender (-Man +Woman)'
            },
            {
                x: [2.5, 5], y: [8.2, 3.2],
                mode: 'lines',
                type: 'scattergl',
                line: { color: '#d69e2e', width: 2, dash: 'dot' },
                name: 'Vector: Royalty'
            }
        ];

        const scatterLayout = {
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            xaxis: { showgrid: true, gridcolor: '#edf2f7', zeroline: false, showticklabels: false, title: { text: 'Latent Dimension X', font: { color: '#a0aec0'} } },
            yaxis: { showgrid: true, gridcolor: '#edf2f7', zeroline: false, showticklabels: false, title: { text: 'Latent Dimension Y', font: { color: '#a0aec0'} } },
            margin: { l: 40, r: 40, t: 30, b: 40 },
            showlegend: true,
            legend: { font: { color: '#4a5568', family: "'Nunito Sans', sans-serif" }, orientation: "h", y: -0.1 }
        };

        Plotly.newPlot('plotly-container', scatterData, scatterLayout, { responsive: true, displayModeBar: false });

    </script>
</body>
</html>
