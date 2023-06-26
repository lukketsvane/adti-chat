import os

def replace_spaces_with_hyphens(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if ' ' in file:
                new_name = file.replace(' ', '-')
                src = os.path.join(root, file)
                dst = os.path.join(root, new_name)
                os.rename(src, dst)
                print(f'Renamed file: {file} -> {new_name}')

        for dir in dirs:
            if ' ' in dir:
                new_name = dir.replace(' ', '-')
                src = os.path.join(root, dir)
                dst = os.path.join(root, new_name)
                os.rename(src, dst)
                print(f'Renamed folder: {dir} -> {new_name}')
            
            dir_path = os.path.join(root, dir)
            replace_spaces_with_hyphens(dir_path)

# Replace spaces with hyphens in the current directory and its subfolders
replace_spaces_with_hyphens('path/to/directory')
