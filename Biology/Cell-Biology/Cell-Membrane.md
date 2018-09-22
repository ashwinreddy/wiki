The **cell membrane**, also known as the **plasma membrane** is the membrane that surrounds a cell. Like all biological membranes, the cell membrane is **selectively permeable**: it allows some substances to cross more easily than others. Substances are often controlled via transport proteins. For example, aquaporin allows water to travel through the membrane.

The **fluid mosaic model** describes the membrane as a mosaic of protein molecules bobbing in a fluid layer of phospholipids; the membrane is held together by hydrophobic interactions. As a result, the lipids in the membrane are often shifting and bobbing. Proteins often move more slowly because they are larger, but some membrane proteins drift or move in a directed manner. The membrane must be fluid so that it is permeable and so that membrane proteins can move around. 

# Temperature Effects

At low enough temperatures, the membrane can pack and solidify, but the temperature at which this occurs depends on the type of lipids.

At high temperatures, cholesterol, wedged betweeen phospholipid molecules in animals, restrains movement and lowers the temperature needed to solidify. Thus, cholesterol keeps the membrane fluid, by resisting changes, giving it the name "fluidity buffer."

Fish that live in extreme cold have membranes with a high proportion of unsaturated hydrocarbon tails, enabling their membranes to remain fluid. On the other hand, bacteria living in extreme heat have membranes wit hunuusal lipids that prevent excessive fluidity at high temperatures.


# Components

The most abundant lipids in most membranes are [phospholipids](../Macromolecules/Lipids/Phospholipids), which arrange in a bilayer.



# Membrane Proteins

Membrane proteins are mostly amphipathic.

**Integral proteins** penetrate the hydrophobic interior of the lipid bilayer, with many being transmembrane (spanning the membrane). **Peripheral proteins** are loosely bound to the surface of the membrane, not embedded at all.

## Functions

1. Transport
2. Enzymatic activity
3. Signal transduction
4. Cell-cell recognition

Distinguishing one type of neighboring cell from another and rejecting foreign cells is important. Cells bind to molecules on the extracellular surface of the plasma membrane. These are often carbohydrates, some covalently bonded to lipids, most bonded to proteins, (**glycolipids** and **glycoproteins**, respectively).

5. Intercellular joining
6. Attachment to the cytoskeleton and extracellular matrix

### Transport

@startuml
(*) --> "Initialization"

if "Some Test" then
  -->[true] "Some Activity"
  --> "Another activity"
  -right-> (*)
else
  ->[false] "Something else"
  -->[Ending process] (*)
endif

@enduml