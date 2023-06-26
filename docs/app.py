import os
import glob

def delete_non_md_files(directory):
    # Use '**' to enable recursive (subdirectories included) search
    # Use '*.*' to match any file that has an extension
    for file in glob.glob(os.path.join(directory, '**', '*.*'), recursive=True):
        # Skip '.md' files
        if not file.endswith('.md'):
            os.remove(file)

delete_non_md_files('./')
