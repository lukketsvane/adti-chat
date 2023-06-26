import os
import re

def clean_name(name):
    clean = re.sub(r'([a-zA-Z0-9_\- ()#]+)\s+[a-f0-9]{32}', r'\1', name)
    return clean

def rename_files_in_dir(directory):
    dirs_to_rename = []
    for foldername, subfolders, filenames in os.walk(directory, topdown=False): # Change os.walk to operate in bottom-up mode
        for filename in filenames:
            old_name = os.path.join(foldername, filename)
            new_name = os.path.join(foldername, clean_name(filename))

            # Check if a file with the new name already exists
            if os.path.exists(new_name):
                base, extension = os.path.splitext(new_name)
                i = 1

                # Find a new name that doesn't exist
                while os.path.exists(f"{base} ({i}){extension}"):
                    i += 1

                new_name = f"{base} ({i}){extension}"
            
            os.rename(old_name, new_name)

        for subfolder in subfolders:
            old_name = os.path.join(foldername, subfolder)
            new_name = os.path.join(foldername, clean_name(subfolder))
            dirs_to_rename.append((old_name, new_name))

    # Rename directories
    dirs_to_rename.sort(key=lambda x: x[0], reverse=True)
    for old_name, temp_name in dirs_to_rename:
        new_name = temp_name
        if os.path.exists(new_name):
            base, extension = os.path.splitext(new_name)
            i = 1
            while os.path.exists(f"{base} ({i}){extension}"):
                i += 1
            new_name = f"{base} ({i}){extension}"

        os.rename(old_name, new_name)

rename_files_in_dir('./')
