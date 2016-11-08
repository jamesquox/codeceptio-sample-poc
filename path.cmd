@rem Add local bin folder to path folders
@set np=%cd%\node_modules\.bin
@rem Make sure we only add it once
@echo %path%|find /i "%np:"=%">nul  || set path=%path%;%np%