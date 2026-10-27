const topicGuides = {
  research: {
    number: '01', title: 'Research', label: 'ASK · INVESTIGATE · EXPLAIN',
    intro: 'Research is a careful way to answer a focused question. You study what is already known, choose a method, gather evidence, and make your reasoning clear enough for others to inspect.',
    basics: [
      'Start with a specific, answerable question—not a broad topic.',
      'Read existing work and keep track of what each source actually supports.',
      'Choose a method and measures before interpreting results.',
      'Keep work reproducible: record data, code, settings, and limitations.',
      'Respect citation, privacy, consent, and research ethics.'
    ],
    roadmap: [
      { level: 'Beginner', title: 'Turn curiosity into a question', text: 'Choose a small computing topic, then narrow it to a question that can be answered with evidence. Learn to find credible papers, read abstracts and conclusions, and summarize each paper in your own words.', checkpoint: 'You can state one answerable question and explain what evidence could answer it.' },
      { level: 'Foundation', title: 'Build your research toolkit', text: 'Learn Python, probability, descriptive statistics, spreadsheets or notebooks, and clear technical writing. Keep a literature table with each source’s question, method, result, and limitation.', checkpoint: 'You can compare several sources and identify what they agree on and what remains unknown.' },
      { level: 'Intermediate', title: 'Design and reproduce an experiment', text: 'Write a hypothesis, choose a dataset and measures before running experiments, and create a simple baseline. Record data versions, code, settings, and results; change one factor at a time.', checkpoint: 'Another person can follow your steps and reproduce your baseline result.' },
      { level: 'Advanced', title: 'Make a reliable contribution', text: 'Compare strong baselines, run ablations or sensitivity checks, inspect errors, quantify uncertainty where appropriate, and discuss bias, ethics, and limitations. Share a concise report with reproducible code and a clear claim supported by results.', checkpoint: 'Your claim, evidence, methods, limitations, and reproducibility details are all easy to inspect.' }
    ],
    practice: 'Reproduce one small result with a public dataset. Write a one-page research note: question, related work, method, metric, result, limitations, and steps needed to rerun it.',
    resources: [
      { school: 'KFUPM · course outline', title: 'Research Methods & Experiment Design in Computing', url: 'https://bulletin.kfupm.edu.sa/course-detail?course_code=ICS500' },
      { school: 'Harvard · starting point', title: 'CS50: Introduction to Computer Science', url: 'https://cs50.harvard.edu/x/' }
    ]
  },
  vision: {
    number: '02', title: 'Computer vision', label: 'IMAGES · PATTERNS · PERCEPTION',
    intro: 'Computer vision helps software extract useful information from images and video—for example, recognizing an object, locating it, or separating it from the background.',
    basics: [
      'An image is a grid of pixel values; color images have channels such as RGB.',
      'Learn image coordinates, resizing, cropping, normalization, and augmentation.',
      'Know the difference between classification, object detection, and segmentation.',
      'Separate training, validation, and test data to measure generalization honestly.',
      'Use task-appropriate metrics, such as precision/recall or intersection over union.'
    ],
    roadmap: [
      { level: 'Beginner', title: 'Understand pixels and images', text: 'Learn Python, NumPy, plotting, image coordinates, RGB channels, and common file formats. Load, crop, resize, and normalize images; notice how lighting and viewpoint change them.', checkpoint: 'You can explain an image as arrays of pixel values and perform basic transformations.' },
      { level: 'Foundation', title: 'Build classic image-processing tools', text: 'Practice color spaces, blurring, thresholding, edges, corners, and geometric transforms. Combine these into a small OpenCV pipeline and inspect intermediate outputs.', checkpoint: 'You can choose and explain a basic operation for a specific visual task.' },
      { level: 'Intermediate', title: 'Train vision models', text: 'Learn convolutional neural networks and transfer learning. Start with classification, then explore object detection and segmentation. Split data correctly and choose metrics such as precision/recall or IoU.', checkpoint: 'You can train a model, compare it with a simple baseline, and evaluate on held-out data.' },
      { level: 'Advanced', title: 'Make vision systems robust', text: 'Study data quality, imbalance, augmentation, calibration, robustness to lighting and viewpoint, inference speed, and deployment. Inspect false positives and misses; test performance across meaningful groups and conditions.', checkpoint: 'You can explain where the system fails and make a measured improvement under realistic constraints.' }
    ],
    practice: 'Build an object-detection demo using images you are allowed to use. Show predictions, report precision/recall or another suitable metric, and explain a few failure cases.',
    resources: [
      { school: 'IIT Hyderabad · NPTEL', title: 'Deep Learning for Computer Vision', url: 'https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs174' },
      { school: 'MIT · OpenCourseWare', title: 'Introduction to Deep Learning', url: 'https://ocw.mit.edu/courses/6-s191-introduction-to-deep-learning-january-iap-2020/' }
    ]
  },
  'machine-learning': {
    number: '03', title: 'Machine learning', label: 'DATA · MODELS · EVIDENCE',
    intro: 'Machine learning is a way to build programs that learn patterns from examples and use those patterns to make predictions or decisions on new data.',
    basics: [
      'Understand examples, features, labels, and the difference between supervised and unsupervised learning.',
      'Start with simple baselines such as linear regression, logistic regression, and decision trees.',
      'Use loss functions and evaluation metrics that match the task.',
      'Watch for overfitting, data leakage, class imbalance, and weak train/test splits.',
      'Use validation or cross-validation to compare models fairly.'
    ],
    roadmap: [
      { level: 'Beginner', title: 'Understand data and simple predictions', text: 'Learn Python, data tables, plotting, basic probability and statistics, and vectors. Inspect missing values and outliers; identify what each row, feature, and target means.', checkpoint: 'You can describe a dataset and create a simple rule or majority/average baseline.' },
      { level: 'Foundation', title: 'Learn core model families', text: 'Train linear and logistic regression, nearest neighbors, and decision trees. Understand features, labels, loss, and the difference between supervised and unsupervised learning.', checkpoint: 'You can train at least two model types and explain what patterns they can learn.' },
      { level: 'Intermediate', title: 'Evaluate models fairly', text: 'Create train, validation, and test splits; use cross-validation when suitable; select task-appropriate metrics. Practice feature engineering, regularization, class-imbalance handling, and error analysis while preventing leakage.', checkpoint: 'You can choose a model based on validation evidence and report a final test result only once.' },
      { level: 'Advanced', title: 'Improve generalization responsibly', text: 'Study optimization, ensembles, uncertainty, interpretability, fairness, and distribution shift. Design controlled comparisons, measure trade-offs, and document data and model limitations.', checkpoint: 'You can defend why your model should work on new data and identify conditions where it may not.' }
    ],
    practice: 'Choose a small dataset, define a baseline before training, compare two models with a suitable metric, and explain the errors, limitations, and next experiment—not just the score.',
    resources: [
      { school: 'MIT · OpenCourseWare', title: 'Introduction to Machine Learning topics and labs', url: 'https://ocw.mit.edu/courses/res-tll-008-social-and-ethical-responsibilities-of-computing-serc/pages/ai-algorithms/' },
      { school: 'IIT Kharagpur · NPTEL', title: 'Introduction to Machine Learning', url: 'https://onlinecourses.nptel.ac.in/e-learning/preview/noc22_cs97' },
      { school: 'Harvard · CS50', title: 'Artificial Intelligence', url: 'https://cs50.harvard.edu/x/weeks/ai/' }
    ]
  },
  'deep-learning': {
    number: '04', title: 'Deep learning', label: 'NEURAL NETWORKS · LEARNING · SCALE',
    intro: 'Deep learning is a branch of machine learning that trains multi-layer neural networks to learn useful representations from data. It is widely used for images, language, audio, and other complex inputs.',
    basics: [
      'Review vectors, matrices, derivatives, and the idea of a function with adjustable parameters.',
      'Learn neurons, layers, activation functions, loss, and gradient descent.',
      'Understand backpropagation as the method used to compute gradients through a network.',
      'Track training and validation loss to notice overfitting or unstable learning.',
      'Learn batching, regularization, normalization, and reproducible experiments.'
    ],
    roadmap: [
      { level: 'Beginner', title: 'Build the math and coding base', text: 'Practice Python, vectors and matrices, derivatives, probability, and plotting. Follow a tiny example from input through prediction and loss so the training objective is concrete.', checkpoint: 'You can explain parameters, predictions, loss, and why a model needs to learn.' },
      { level: 'Foundation', title: 'Train a small neural network', text: 'Learn neurons, layers, activations, gradient descent, and backpropagation. Train a multilayer perceptron on a small dataset; plot training and validation curves.', checkpoint: 'You can tell whether training is learning, overfitting, or failing to converge.' },
      { level: 'Intermediate', title: 'Choose architectures for data', text: 'Study CNNs for images and attention/sequence models for ordered data. Practice optimizers, initialization, batching, normalization, regularization, and transfer learning.', checkpoint: 'You can select a suitable architecture and compare it with a simpler model.' },
      { level: 'Advanced', title: 'Reproduce and improve experiments', text: 'Reproduce a documented benchmark, track configurations and compute, compare controlled changes, and analyze errors. Consider data quality, robustness, efficiency, and responsible use.', checkpoint: 'You can reproduce a result, explain the effect of design choices, and report limitations.' }
    ],
    practice: 'Train a small image classifier, compare it with a simple baseline, plot learning curves, show examples it gets wrong, and write what you would change next.',
    resources: [
      { school: 'MIT · OpenCourseWare', title: 'Introduction to Deep Learning (6.S191)', url: 'https://ocw.mit.edu/courses/6-s191-introduction-to-deep-learning-january-iap-2020/' },
      { school: 'KFUPM · course catalog', title: 'Information & Computer Science course descriptions', url: 'https://bulletin.kfupm.edu.sa/course-details?level=Graduate&subject_code=ICS' }
    ]
  },
  algorithms: {
    number: '05', title: 'Practical algorithms', label: 'MODEL · IMPLEMENT · MEASURE',
    intro: 'An algorithm is a precise sequence of steps for solving a problem. Practical algorithm work means choosing a correct approach, implementing it, and checking that its speed and memory use fit the real constraints.',
    basics: [
      'Get fluent with arrays, strings, hash maps, stacks, queues, trees, and graphs.',
      'Practice searching and sorting, recursion, and reading problem constraints.',
      'Use Big-O to estimate how runtime and memory grow with input size.',
      'Test edge cases and explain why an algorithm returns the right result.',
      'Compare simple baselines before reaching for a more complex method.'
    ],
    roadmap: [
      { level: 'Beginner', title: 'Write clear, correct solutions', text: 'Learn one language well, trace loops and recursion, and implement linear search, binary search, and simple sorting. Practice translating a problem statement into inputs, outputs, and edge cases.', checkpoint: 'Your solution handles empty, small, duplicate, and boundary inputs correctly.' },
      { level: 'Foundation', title: 'Use data structures deliberately', text: 'Practice arrays, strings, hash maps, stacks, queues, trees, and graphs. Learn Big-O and connect each structure to the operations a task needs to perform quickly.', checkpoint: 'You can justify a data structure choice and estimate runtime and memory growth.' },
      { level: 'Intermediate', title: 'Learn reusable problem-solving patterns', text: 'Study sorting, divide-and-conquer, greedy methods, graph traversal, shortest paths, and dynamic programming. Prove or reason through correctness before optimizing.', checkpoint: 'You can explain why your approach is correct and compare its complexity with a simpler solution.' },
      { level: 'Advanced', title: 'Optimize for practical constraints', text: 'Profile implementations on realistic input sizes. Consider memory limits, streaming data, concurrency, approximation, and trade-offs; benchmark against a baseline and keep correctness tests.', checkpoint: 'You can demonstrate a measurable improvement and explain the cost, edge cases, and limits.' }
    ],
    practice: 'Choose a practical task such as finding duplicate records or routing between locations. Implement a straightforward baseline and a better-fit algorithm, then compare correctness, runtime, and memory on several input sizes.',
    resources: [
      { school: 'MIT · OpenCourseWare', title: 'Introduction to Algorithms (6.006)', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/' },
      { school: 'Harvard · CS50x', title: 'Algorithms: searching, sorting, Big-O, recursion', url: 'https://cs50.harvard.edu/x/weeks/3/' },
      { school: 'Harvard · CS50x', title: 'Data structures', url: 'https://cs50.harvard.edu/x/weeks/5/' }
    ]
  }
};

const topicDialog = document.querySelector('#topic-dialog');
const topicDialogBody = document.querySelector('#topic-dialog-body');
const topicDialogClose = document.querySelector('.topic-dialog-close');

function renderTopicGuide(topic) {
  const guide = topicGuides[topic];
  if (!guide) return;

  topicDialogBody.innerHTML = `
    <p class="topic-dialog-kicker">${guide.number} / LEARNING GUIDE · ${guide.label}</p>
    <h2 id="topic-dialog-title">${guide.title}<span>.</span></h2>
    <p class="topic-dialog-intro">${guide.intro}</p>
    <div class="topic-guide-grid">
      <section class="topic-guide-section">
        <p class="topic-section-label">START WITH THE BASICS</p>
        <ul class="topic-basics">${guide.basics.map((item) => `<li>${item}</li>`).join('')}</ul>
      </section>
      <section class="topic-guide-section">
        <p class="topic-section-label">BEGINNER → ADVANCED PATH</p>
        <ol class="topic-roadmap">${guide.roadmap.map((step) => `<li><span>${step.level}</span><strong>${step.title}</strong><p>${step.text}</p><small><b>Checkpoint:</b> ${step.checkpoint}</small></li>`).join('')}</ol>
      </section>
    </div>
    <aside class="topic-practice"><span>TRY THIS NEXT</span><p>${guide.practice}</p></aside>
    <section class="topic-resources"><p class="topic-section-label">LEARNING LINKS</p><ul>${guide.resources.map((resource) => `<li><span>${resource.school}</span><a href="${resource.url}" target="_blank" rel="noreferrer">${resource.title} <b aria-hidden="true">↗</b></a></li>`).join('')}</ul></section>
    <p class="topic-note">The roadmap is a practical learning sequence, not a promise of a credential. Work through concepts, projects, and feedback at your own pace.</p>`;
  topicDialog.showModal();
}

document.querySelectorAll('.topic-card').forEach((card) => {
  card.addEventListener('click', () => renderTopicGuide(card.dataset.topic));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      renderTopicGuide(card.dataset.topic);
    }
  });
});

topicDialogClose.addEventListener('click', () => topicDialog.close());
topicDialog.addEventListener('click', (event) => {
  if (event.target === topicDialog) topicDialog.close();
});

