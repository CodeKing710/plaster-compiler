Plaster Compiler

A complete rethink of PlasterLang and how it will function.

The goal of Plaster is to be efficient and polymorphic enough to other languages that the switch shouldn't be challenging as the syntax is quite the same.

First feature - Compound Logical Statements and Expressions
Look: if(A == B or C)
The Same As: if(A == B or A == C)
Also Acceptable: if(A == (B|C))

Purpose: Easier to read and understand logical expressions, as well as much shorter logical expressions. If you truly wanted to compare what we call "master left hand operand" (MLHOs) to any other amount of "right hand operands" (RHOs), the 'or' statement will read as it looks and compare 'A' to both 'B' and 'c' without the need to explicity handle that as a clause since the clause is compound in meaning. Adding parentheses around the 'B or C' portion will force compare 'B' and 'C' as boolean values before evaluating it against 'A'. Keep in mind, there are lots of variants that are also acceptable syntax. Comparing to a tuple will compare the MLHO to each value in the tuple and run the comparison as a compound 'or' statement for what each logical comparison returns. Change the '|' to '&' and it will run the comparison as a compound 'and' statement the same way.