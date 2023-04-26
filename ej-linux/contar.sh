for file in *.txt
    do
        echo $file tiene $(wc -l < "$file") lineas.
done