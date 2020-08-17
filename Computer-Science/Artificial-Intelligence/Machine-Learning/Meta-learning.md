---
bibliography: "Computer-Science/Artificial-Intelligence/Machine-Learning/papers.bib"
---

**Meta-learning** is often described as "learning to learn," but simply refers to getting a computer to quickly adapt to a set of test tasks after being given the chance to learn on training tasks.

> Learning quickly is a hallmark of human intelligence,
whether it involves recognizing objects from a few examples or quickly learning new skills after just minutes of
experience. Our artificial agents should be able to do the same, learning and adapting quickly from only a few examples, and continuing to adapt as more data becomes available. [@finn2017modelagnostic]

Meta-learning consists of two steps: meta-training and meta-testing. In meta-training, we do train-and-test cycles on different support sets for tasks. Then, at meta-testing we see if we can do a task by doing a little bit of training and then testing.

---