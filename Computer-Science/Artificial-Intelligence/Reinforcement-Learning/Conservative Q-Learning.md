**Conservative Q-Learning** is an [[offline reinforcement learning]]



algorithm that modifies [[Q-learning]] so not to be erroneously high on states it has not seen before. The algorithm comes up with a lower bound on the Q value, thereby making it conservative.


It says the Q-functions for OOD actions are pushed down. 