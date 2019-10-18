**Node-voltage analysis** is an algorithm to find all the voltages of [[node]]s in a circuit.

# Algorithm

1. Choose a reference node to be [[ground]].
2. Mark known node voltages
3. Mark unknown node voltages
4. Mark element voltages and currents
5. [Kirchhoff's current law](./Kirchhoffs-circuit-laws#current-law) for all nodes with unknown node voltages
6. Component equations & Replace component voltages with node voltages.
7. Substitute step 6 into step 5